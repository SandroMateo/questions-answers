import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signIn() {
      this.transitionTo('index');
    },

    signOut() {
      this.transitionTo('index');
    }
  }
});
