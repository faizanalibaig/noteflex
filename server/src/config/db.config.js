const mongoose = require('mongoose');
require('dotenv').config();

async function dbconfig() {
  try {
    console.log('Connected to the Database Successfully');
    return await mongoose.connect(process.env.DEVELOPMENT_DATABASE);
  } catch (error) {
    console.error('Error while connecting to Database', error);
  }
}

module.exports = dbconfig;
