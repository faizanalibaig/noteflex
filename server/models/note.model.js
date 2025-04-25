const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'The note title is required'],
    min: [6, 'Title is too short'],
    validate: {
      validator: function (v) {
        return /^[A-Za-z0-9\s.,:!?'\-]{6,100}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid title`,
    },
  },
});

module.exports = mongoose.model('note', NoteSchema);
