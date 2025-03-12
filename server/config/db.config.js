const mongoose = require('mongoose');
require('dotenv').config();

async function dbconfig() {
  try {
    console.log('Connecting to MongoDB...');
    return await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error('Error while connecting to Database', error);
  }
}

module.exports = dbconfig;
