import Ember from 'ember';

export default Ember.Component.extend({
  loggedIn: Ember.inject.service('logged-in'),
  showForm: Ember.inject.service('show-hide'),
  sortBy: ['likes:desc'],
  answerAmount: Ember.computed('question.answers', function() {
    return this.get('question.answers').content.length;
  }),
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),

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
    },

    showAnswerForm() {
      this.get('showForm').toggleNewAnswerForm();
    },
  }
});
