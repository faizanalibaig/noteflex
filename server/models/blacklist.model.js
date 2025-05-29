const mongoose = require('mongoose');

const BlacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, 'Token is required'],
      ref: 'User',
    },
    userId: {
      type: mongoose.Types.ObjectId,
      required: [true, 'User ID is required'],
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blacklist', BlacklistSchema);
