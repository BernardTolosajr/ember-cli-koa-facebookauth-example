# ember-cli-koa-facebook-auth-example
This simple example app allows users authenticate using their Facebook account. Their facebook information is used to create an account on the koa.js server along with an access token.

This app makes use of:

* [Ember CLI][1]
* [koa.js][2]
* [Ember Simple Auth][3]
* [Torii][4]
* [koa-passport][5]

## Installation
This assumes you have git, node, bower, and ember-cli installed

1. Clone this repo.
2. Edit the api keys in `auth/config/environment.js` (you'll need to
   register your application with facebook).

[1]: https://github.com/stefanpenner/ember-cli  "Ember CLI"
[2]: http://koajs.com/  "koa.js"
[3]: https://github.com/simplabs/ember-simple-auth  "Ember Simple Auth"
[4]: https://github.com/Vestorly/torii  "Torii"
[5]: https://www.npmjs.com/package/koa-passport "koa-passport"
