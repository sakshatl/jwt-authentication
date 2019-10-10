const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv'); // to use the .env file
env.config()

const app = express();

// connect to the db
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true}, () => console.log("connected to the db"));

// import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// middleware
app.use(express.json());

// route middlewares
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

// listen to a port number
app.listen(5000, () => console.log('server running on port 5000'))