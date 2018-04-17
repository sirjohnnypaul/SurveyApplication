//Import neccessary stuff
const passport = require("passport");

module.exports = app => {
  //Single route handler 'google' in passport.authenticate is the name of google strategy and know to go to passport.use Google Strategy
  //with profile and email we are telling what to ask google to grant access
  //short: if anyone uses /auth/google be routed to authenticate with gogle
  app.get(
      '/auth/google',
      passport.authenticate('google', {
        scope: ['profile', 'email']
      })
    );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
