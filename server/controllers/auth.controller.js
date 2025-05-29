const {
  ValidateUserRegistration,
  ValidateUserLogin,
} = require('../validators/auth.validator');

const User = require('../models/user.model');
const Blacklist = require('../models/blacklist.model');

exports.register = async (req, res) => {
  try {
    const data = req.body;
    const { error } = await ValidateUserRegistration(data);

    if (error) {
      return res.status(400).send({
        success: false,
        message:
          'The provided data for user registration is not complete or valid',
        error: error?.details,
      });
    }

    const userExist = await User.findOne({ email: data?.email });

    if (userExist) {
      return res.status(500).send({
        success: false,
        message: 'User with this email already exists',
      });
    }

    const user = new User(data);
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

    let options = {
      expires: 20 * 60 * 10000,
      httpOnly: true,
      secure: true,
    };

    const token = await user.generatetoken({ id: user._id });
    res.cookie('token', token, options);

    const { password: hashedPassword } = user;
    const passCompare = await user.comparepassword(password, hashedPassword);

    if (!passCompare) {
      return res.status(500).send({
        success: false,
        message: 'Wrong password - please enter valid password',
      });
    }

    await user.incrementlogin();
    return res.status(200).send({
      success: true,
      token: token,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    let token =
      req.body.token || req.headers['authorization'] || req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.',
      });
    }

    if (token.startsWith('Bearer ')) {
      token = token.split(' ')[1];
    }

    const checkIfBlacklisted = await Blacklist.findOne({ token: token });

    if (checkIfBlacklisted) {
      return res.status(204).send('Token is already blacklisted');
    }

    const blacklist = new Blacklist({ token: token });
    await blacklist.save();

    res.clearCookie('token');

    return res
      .status(200)
      .send({ success: true, message: 'You are logged out!' });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
