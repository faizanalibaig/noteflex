const bcrypt = require('bcryptjs');

async function hashpassword(password) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);

    return hashed_password;
  } catch (error) {
    console.error('Error generating token:', error.message);
    throw error;
  }
}

module.exports = hashpassword;
