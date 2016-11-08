import Ember from 'ember';

export default Ember.Service.extend({
  signedIn: false,
  name: '',

  login(name) {
    this.set('signedIn', true);
    this.set('name', name);
  },

  logout() {
    this.set('signedIn', false);
    this.set('name', '');
  }
});
