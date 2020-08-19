const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  email : {
    type: String, 
    required: [true, 'please enter an email'], 
    unique: true,
    lowercase: true,
    validate: [isEmail, 'please enter valid email']  // custoom func for email validation
  },
  password : {
    type: String,
    required: [true, 'please enter a password'],
    minlength: [6, 'minimum password length should be 6 characters'],
  }
})

const User = mongoose.model('user', userSchema);

module.exports = User;