const mongoose = require('mongoose');
const DB_URI = 'mongodb://127.0.0.1:27017/movies';

async function initDB () {
  mongoose.set('strictQuery', false);
  await mongoose.connect(DB_URI);

  console.log('DB connected...');
}

module.exports = initDB;