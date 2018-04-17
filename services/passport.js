//Creates new instance of GoogleStrategy, tells how to handle it
//https://console.developers.google.com/apis/dashboard?project=fair-app-188310&duration=PT1H
//first argument second after comma near accessToken
//This will route user back to app after granting permission from google
//Setting passport oauth
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//Defining the keys route
const mongoose = require("mongoose");
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            //we already have a record with profile id
          }
          else {
            //we dont have, make new record
              new User ({ googleId: profile.id}).save();
          }
        });
    }
  )
);
