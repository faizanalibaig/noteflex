const bcrypt = require('bcryptjs');

async function comparepassword(password, hashed_password) {
  const valid = await bcrypt.compare(password, hashed_password);

  return valid;
}

module.exports = comparepassword;
