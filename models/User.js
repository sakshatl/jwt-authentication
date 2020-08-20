const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

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

// fire a hook after a user is saved to the db
// userSchema.post('save', function(doc, next){

//  next();              next is imp to use it mover onto the next middleware 
// })


// fire a hook before a user is saved to the db
userSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);   // this is the user instance avaible to us on 'pre' hook
  next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;