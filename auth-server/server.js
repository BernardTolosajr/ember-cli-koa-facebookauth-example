var koa = require('koa');
var passport = require('koa-passport');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/beerlocker');

var app = module.exports  = koa();

require('./config/passport')(passport);
require('./config/koa')(app, null, passport);

require('./config/routes')(app, passport);

if (!module.parent) {
  app.listen(8000);
}
