const router = require('express').Router(); // using the Router method from express
const User = require('../model/User'); // getting the User model
const bcrypt = require('bcryptjs'); // create a slat and hash the password
const jwt = require('jsonwebtoken');


// register route
router.post('/register', async (req, res) => {



  // check if user is already in the db or not
  const emailExist = await User.findOne({email: req.body.email})

  if(emailExist){
    return res.send("user slready exists with that email");
  } else {
    // user does not exist
    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =await bcrypt.hash(req.body.password, salt);

    // create a new user
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    })

    const savedUser = await newUser.save();

    console.log("new user created")
    return res.send(savedUser);
  }       
});


// login route
router.post('/login', async (req, res) => {
  
  const existingUser = await User.findOne({email: req.body.email});

  if(!existingUser){ // no such user with that email
    res.send("email or passwords do not match");
  }else{
    // verify the password
    const validPassword = await bcrypt.compare(req.body.password, existingUser.password);
    if(!validPassword) { // invalid password
      return res.send("email or passwords don not match"); 
    }
    else{
      // create and assign a token
      const token = jwt.sign({_id: existingUser._id}, process.env.TOKEN_SECRET);
      return res.header('auth-token', token).send(token);
    }
  }

});



module.exports = router;

