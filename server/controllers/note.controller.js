const Note = require('../models/note.model');
const { ValidateNote } = require('../validators/note.validator');

exports.create = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      return res.status(400).send({
        success: false,
        message: 'The required data is not provided',
      });
    }

    const { error } = ValidateNote({ title });

    const separate = title.charAt(0).toUpperCase() + title.slice(1);
    console.log('SEPARATE: ', separate);

    if (error) {
      return res.status(400).send({
        success: false,
        message:
          'The provided data for note creation is not complete or invalid',
        error: error?.details,
      });
    }

    const note = await Note({ title });
    await note.save();

    res.status(201).send({
      success: true,
      data: note,
      message: 'Note created successfully',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Failed to create a note',
    });
  }
};

exports.findAll = async (req, res) => {};
exports.findOne = async (req, res) => {};
exports.deleteOne = async (req, res) => {};
exports.deleteAll = async (req, res) => {};
exports.update = async (req, res) => {};
