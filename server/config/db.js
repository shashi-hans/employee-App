'use strict';

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true); // Optional: for suppressing deprecation warnings

    await mongoose.connect(db, {
      // These are the only options needed now; others are deprecated
      serverSelectionTimeoutMS: 5000, // Optional: helps fail fast if there's a connection issue
    });

    console.log('✅ MongoDB is Connected...');
  } catch (err) {
    console.error('❌ Error connecting to MongoDB ...');
    console.error('Reason --', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
