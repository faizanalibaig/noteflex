const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema(
  {
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
    description: {
      type: String,
      require: [true, 'The note description is required'],
      min: [10, 'Description is too short'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: [true, 'The note must belong to a user'],
    },
    tags: {
      type: [String],
      default: [],
      validate: {
        validator: function (v) {
          return v.length <= 5;
        },
        message: (props) => `You can only add up to 5 tags`,
      },
    },
    draft: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', NoteSchema);
