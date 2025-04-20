const jwt = require('jsonwebtoken');
require('dotenv').config();

async function verifyToken(req, res, next) {
  try {
    let token =
      req.body.token || req.headers['authorization'] || req.cookies.token;
    const secret = process.env.SECRET_KEY;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.',
      });
    }

    if (token.startsWith('Bearer ')) {
      token = token.split(' ')[1];
    }

    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
      error: error.message,
    });
  }
}

module.exports = verifyToken;
