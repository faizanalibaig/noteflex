const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      required: [true, 'Name is required'],
      minlength: 4,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      minlength: [8, 'Password must be at least 8 characters long'],
      maxlength: [128, 'Password must be at most 128 characters lone'],
      required: true,
      validate: {
        validator: function (value) {
          const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/])[a-zA-Z\d!@#$%^&*()_\-+={}[\]\\|:;'<>,.?/]{8,}$/;
          return regex.test(value);
        },
        message:
          'Password must contain at least one uppercase letter, one lowercase letter, one special character and one number',
      },
    },
    role: {
      type: String,
      required: true,
      enum: ['Admin', 'User'],
      default: 'User',
    },
    loginCount: {
      type: Number,
      default: 0,
    },
    token: { type: Number },
    tokenExpires: { type: Date },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre('save', async function (next) {
  const user = this;
  try {
    if (user.isModified('password') || user.isNew) {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(user.password, salt);

      user.password = hash;
      next();
    } else {
      next();
    }
  } catch (error) {
    throw new Error('Error while hashing the password', error.message);
  }
});

UserSchema.methods.incrementlogin = function () {
  this.loginCount += 1;
  return this.save();
};

UserSchema.methods.comparepassword = function (password) {
  return bcrypt.compare(password, this.password);
};

UserSchema.methods.generatetoken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
  console.log('USER: ', this, 'TOKEN: ', token);

  return token;
};

UserSchema.statics.findByToken = async function (token) {
  try {
    if (!process.env.JWT_SECRET) {
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return await this.findOne({ _id: decoded.id });
  } catch (error) {
    throw new Error('Error while verifying the token: ' + error.message);
  }
};

module.exports = mongoose.model('User', UserSchema);
