const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//Requiring files to be used
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

//Setting app that will listen and handle requests
const app = express();


//Require authroute files and returns function and calls with the app function
require('./routes/authRoutes')(app);
//Hello world screen
//app.get('/', (req, res) => {
//  res.send({ bye: 'buddy' });
//});


//Setting port
//If there is not defined use the value of 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
