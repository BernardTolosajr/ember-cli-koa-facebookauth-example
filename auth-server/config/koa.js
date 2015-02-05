var cors = require('koa-cors');
var bodyParser = require('koa-bodyparser');

module.exports = function(app, config, passport) {
  app.use(cors());
  app.use(bodyParser());
  app.use(passport.initialize());
};
