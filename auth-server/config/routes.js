var router = require('koa-router');
var authController = require('../controllers/facebook');

module.exports = function(app, passport) {
  app.use(router(app));

  app.post('/auth/facebook/token', passport.authenticate('facebook-token'), authController.auth);
};
