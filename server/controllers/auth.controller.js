const User = require('../models/user.model');
const hashpassword = require('../utils/hash-password');
const comparepassword = require('../utils/compare-password');

exports.register = async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    const check_user = await User.find({ email: email });

    if (check_user) {
      res.status(500).send({
        success: false,
        message: 'User already exists ',
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

    res.status(201).send({
      success: true,
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      res.status(500).send({
        success: false,
        message: 'User not found - please check your email',
      });
    }
    const { password: hashed_password } = user;
    const pass_compare = await comparepassword(password, hashed_password);

    if (!pass_compare) {
      res.status(500).send({
        success: false,
        message: 'Wrong password - please enter valid password',
      });
    }

    return res.status(200).send({
      success: true,
      message: 'token',
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
