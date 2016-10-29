import Ember from 'ember';

export default Ember.Component.extend({
  showForm: Ember.inject.service('show-hide'),
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },

    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },

    upvote(answer) {
      this.sendAction('upvote', answer);
    },

    downvote(answer) {
      this.sendAction('downvote', answer);
    },

    showEditQuestion() {
      this.get('showForm').toggleUpdateQuestionForm();
    }
  }
});
