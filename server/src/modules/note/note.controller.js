const Note = require('./note.model');
const { ValidateNote } = require('../../config/validators/note.validator');

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
    if (error) {
      return res.status(400).send({
        success: false,
        message:
          'The provided data for note creation is not complete or invalid',
        error: error?.details,
      });
    }

    // const separate = title.charAt(0).toUpperCase() + title.slice(1);
    const note = await Note({ title });
    await note.save();

    return res.status(201).send({
      success: true,
      data: note,
      message: 'Note created successfully',
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Failed to create a note',
    });
  }
};

exports.retrieve = async (req, res) => {
  try {
    const { id } = req.param;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(500).send({
        success: false,
        message: 'Failed to find the note',
      });
    }

    return res.status(200).send({
      success: true,
      data: note,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Failed to retrieve the note',
    });
  }
};

exports.retrieveAll = async (req, res) => {
  try {
    const notes = await Note.find();
    if (!notes) {
      return res.status(204).send({
        success: false,
        message:
          'Not a single note is created yet - please write your first note',
      });
    }

    return res.status(200).send({
      success: true,
      data: notes,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Failed to retrieve all notes',
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.param;
    const data = req.body;

    const note = await Note.findByIdAndUpdate(id, data, { new: true });

    return res.status(200).send({
      success: true,
      data: note,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Failed to update the note',
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.param;
    const note = await Note.findByIdAndDelete(id);

    return res.status(200).send({
      success: true,
      data: note,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: 'Failed to delete the note',
    });
  }
};
