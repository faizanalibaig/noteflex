const bcrypt = require('bcryptjs');

async function hashpassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);
}
