import Ember from 'ember';

export default Ember.Component.extend({
  loggedIn: Ember.inject.service('logged-in'),
  actions: {
    upvote(answer) {
      this.sendAction('upvote', answer);
    },

    downvote(answer) {
      this.sendAction('downvote', answer);
    },

    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
    }
  }
});
