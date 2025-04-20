const jwt = require('jsonwebtoken');
require('dotenv').config();

async function generate_token(payload) {
  const secret = process.env.SECRET_KEY;
  const options = { expiresIn: '1d' };

  return jwt.sign(payload, secret, options);
}

module.exports = generate_token;
