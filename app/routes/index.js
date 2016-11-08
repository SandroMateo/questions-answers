import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      var that = this
      newQuestion.save();
      setTimeout(function() {
        that.transitionTo('index');
      }, 1000);
    }
  }
});
