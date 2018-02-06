var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var jwt = require('jsonwebtoken');
var User = require('./userModel.js');
var config = require('../config.js');

passport.use(new FacebookStrategy({
  clientID: config.clientID,
  clientSecret: config.clientSecret,
  callbackURL: "http://angumoviewatch.herokuapp.com/auth/facebook/callback/",
  profileFields: ['email', 'displayName']
},
function(accessToken, refreshToken, profile, done) {
  User.findOne({ 'socialId': profile.id }, function(err, user) {
    if (err) {
      return done(err);
    }
    //If no user was found, create a new user with details from the facebook profile
    if (!user) {
      user = new User({
        socialId: profile.id,
        name: profile.displayName,
        email: profile.emails ? profile.emails[0].value : "",
        provider: 'facebook',
        loginCount: 0
      });
    } else {
      //else, a user exists so let's add one to their login count
      user.loginCount++;
    }
    //finally let's save, make a token and call "done"
    user.save(function(err, newUser) {
      if (err) {
        return done(err);
      } else {
        var token = jwt.sign({
          id: newUser.id,
          name: newUser.name,
        }, config.SECRET_KEY || process.env.SECRET_KEY, { expiresIn: "7d" });
        return done(null, { id: newUser.id, token: token, name: newUser.name });
      }
    });
  });
}

));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
  });

module.exports = passport;