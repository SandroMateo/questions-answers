import Ember from 'ember';

export default Ember.Component.extend({
  loggedIn: Ember.inject.service('logged-in'),
  actions: {
    signIn() {
      var name = this.get('name');
      this.get('loggedIn').login(name);
      this.sendAction('signIn');
    },

    signOut() {
      this.get('loggedIn').logout();
      this.sendAction('signOut');
    }
  }
});
