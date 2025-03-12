const User = require('../models/user.model');

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
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
