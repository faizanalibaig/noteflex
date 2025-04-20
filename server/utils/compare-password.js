const bcrypt = require('bcryptjs');

async function comparepassword(password, hashed_password) {
  try {
    const valid = await bcrypt.compare(password, hashed_password);
    return valid;
  } catch (error) {
    console.error('Error generating token:', error.message);
    throw error;
  }
}

module.exports = comparepassword;
