import Ember from 'ember';
import ToriiOauth2Authenticator from '../authenticators/torii-oauth2';
import Session from 'simple-auth/session';

export default {
  name: 'authentication',
  initialize: function(container) {
  Session.reopen({
  currentUser: function() {
    var userId = this.get('id');
    if (!Ember.isEmpty(userId)) {
      return container.lookup('store:main').find('user', userId);
    }
  }.property('id')
  });
     container.register('authenticator:torii-oauth2', ToriiOauth2Authenticator);
  }
};
