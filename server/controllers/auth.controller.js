const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.register = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.statu(400).send({
        success: false,
        message: 'The provided data for registration is not complete or valid',
      });
    }

    const { password, ...user_data } = data;
    console.log('password: ', password);
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    console.log('Hashed Password: ', hashed_password);

    const user = new User({
      password: hashed_password,
      ...user_data,
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

// exports.find_user = async (req, res) => {
//   const { id } = req.params;
//   const { password } = req.body;
//   const user = await User.findById(id);

//   console.log('User: ', user, 'Password: ', password);
//   const pass_compare = await bcrypt.compare(password, user?.password);
//   console.log('User Password: ', pass_compare);
// };
