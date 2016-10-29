import Ember from 'ember';

export default Ember.Component.extend({
  showForm: Ember.inject.service('show-hide'),
  actions: {
    editQuestion(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.sendAction('editQuestion', params, question);
      this.get('showForm').toggleUpdateQuestionForm();
    }
  }
});
