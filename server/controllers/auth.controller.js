const User = require('../models/user.model');
const hashpassword = require('../utils/hash-password');
const comparepassword = require('../utils/compare-password');
const {
  ValidateUserRegistration,
  ValidateUserLogin,
} = require('../validators/auth.validator');

exports.register = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;

    const { error } = await ValidateUserRegistration({
      username,
      password,
      email,
      role,
    });

    if (error) {
      return res.status(400).send({
        success: false,
        message:
          'The provided data for user registration is not complete or valid',
        error: error?.details,
      });
    }

    const check_user = await User.findOne({ email: email });
    if (check_user) {
      return res.status(500).send({
        success: false,
        message: 'User with this email already exists',
      });
    }

    const hashed_password = await hashpassword(password);
    const user = new User({
      password: hashed_password,
      email,
      username,
      role,
    });
    await user.save();

    return res.status(201).send({
      success: true,
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const { error } = ValidateUserLogin({ email, password });
    if (error) {
      return res.status(400).send({
        success: false,
        message: 'There is some issue with the provided payload, please check',
        error: error?.details,
      });
    }

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(500).send({
        success: false,
        message: 'User not found - please verify your email',
      });
    }

    const { password: hashed_password } = user;
    const pass_compare = await comparepassword(password, hashed_password);
    if (!pass_compare) {
      return res.status(500).send({
        success: false,
        message: 'Wrong password - please enter valid password',
      });
    }

    return res.status(200).send({
      success: true,
      message: 'token',
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
