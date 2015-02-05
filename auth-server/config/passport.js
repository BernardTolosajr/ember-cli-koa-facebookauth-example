var FacebookTokenStrategy = require('passport-facebook-token').Strategy;
var User = require('../models/user');
var co = require('co');

function facebookAuth(code, refreshToken, profile, done) {
  User.findOne({'facebookId': profile.id}, function(err, user) {
    if (user) {
      done(null, user);
    } else {
      var user = new User({
          username: profile.displayName,
          facebookId: profile.id
      });
      user.save(function(err, user) {
        if (err) {throw err };
        done(null, user);
      });
    }
    });
};

var serialize = function(user, done) {
  done(null, user);
};

var deserialize = function (id, done) {
  User.findById(id, done);
};

module.exports = function(passport) {
  passport.serializeUser(serialize);
  passport.deserializeUser(deserialize);
  passport.use(new FacebookTokenStrategy({
    clientID: 'facebook_id',
    clientSecret: 'facebook_secrect_key',
    redirectURL: 'facebook_redirect_url'
  }, facebookAuth));
};
