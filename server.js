const express = require('express');
const mongoose = require('mongoose');
const config = require("./config");

// import routes
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());

// set view engine
app.set('view engine', 'ejs')

// database connection
const dbURI = `mongodb+srv://${config.dbCreds.dbUsername}:${config.dbCreds.dbPassword}@cluster0.ebnyh.mongodb.net/auth-users`;
mongoose.connect(dbURI, {useNewUrlParser :  true, useUnifiedTopology : true, useCreateIndex : true})
  .then(() => app.listen(5000, () => console.log("server up and running on port : 5000")))
  .catch((err) => console.log(err))

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoutes);







