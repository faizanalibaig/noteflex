const Blacklist = require('../models/blacklist.model');
const User = require('../models/user.model');

const jwt = require('jsonwebtoken');
require('dotenv').config();

async function verifyToken(req, res, next) {
  try {
    console.log('COOKIES: ', req.cookies);

    let token =
      req.body.token || req.headers['authorization'] || req.cookies.token;
    const secret = process.env.JWT_SECRET;

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
      return res
        .status(401)
        .send({ message: 'This session has expired. Please login' });
    }

    const decoded = jwt.verify(token, secret);

    const { id } = decoded;
    const user = await User.findById(id).select(
      '-password -__v -loginCount -createdAt -updatedAt'
    );

    req.user = user._doc;
    next();
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: 'Invalid or expired token',
      error: error.message,
    });
  }
}

module.exports = verifyToken;
