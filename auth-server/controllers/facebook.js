exports.auth = function *() {
  var user = {id: this.req.user._id, name: this.req.user.username};
  this.body = {user: user, 'access_token': 'secret'};
};
