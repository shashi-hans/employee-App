const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  pan: {
    type: String,
    required: false
  },
  organization: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('employee', EmployeeSchema);
