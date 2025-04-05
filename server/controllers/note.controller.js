const Note = require('../models/note.model');

exports.create = async (req, res) => {
  try {
    const note = await Note(req.body);
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
