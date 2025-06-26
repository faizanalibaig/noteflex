const jwt = require('jsonwebtoken');
require('dotenv').config();

async function generateToken(payload) {
  try {
    const secret = process.env.SECRET_KEY;

    if (!secret) {
      throw new Error('SECRET_KEY is not defined in environment variables');
    }

    const options = {
      algorithm: 'HS512',
      expiresIn: '1d',
    };

    const token = jwt.sign(payload, secret, options);
    return token;
  } catch (error) {
    console.error('Error generating token:', error.message);
    throw error;
  }
}

module.exports = generateToken;
