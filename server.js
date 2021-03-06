const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// import routes
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// set view engine
app.set('view engine', 'ejs')

// database connection
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ebnyh.mongodb.net/auth-users`;
mongoose.connect(dbURI, {useNewUrlParser :  true, useUnifiedTopology : true, useCreateIndex : true})
  .then(() => app.listen(5000, () => console.log("server up and running on port : 5000")))
  .catch((err) => console.log(err))

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);


// cookies 
app.get("/set-cookies", (req, res) => {
  // res.setHeader('Set-Cookie', 'newUser=true');
  res.cookie('newUser', false);
  res.cookie('isEmployee', true, { maxAge : 1000 * 60 * 60 * 24});  // maxAge for cookie is one day
  res.send('you got the cookies');
})

app.get("/read-cookies", (req, res) => {
  
})







