import Ember from 'ember';

export default Ember.Component.extend({
  loggedIn: Ember.inject.service(),

  actions: {
    signIn() {
      this.get('loggedIn').login(this.get('name'));
    },

    signOut() {
      this.get('loggedIn').logout();
    }
  }
});
