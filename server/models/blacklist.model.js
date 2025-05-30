const mongoose = require('mongoose');

const BlacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, 'Token is required'],
      ref: 'User',
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blacklist', BlacklistSchema);
