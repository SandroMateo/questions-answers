import Ember from 'ember';

export default Ember.Route.extend({
  showForm: Ember.inject.service('show-hide'),
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    showNewQuestion() {
      this.get('showForm').toggleNewQuestionForm();
    }
  }
});
