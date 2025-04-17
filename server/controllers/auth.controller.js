const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.register = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.statu(400).send({
        success: false,
        message: 'Please provide user data for registration',
      });
    }

    const { password, ...userdata } = data;
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    const user = new User({
      password: hashed_password,
      ...userdata,
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
