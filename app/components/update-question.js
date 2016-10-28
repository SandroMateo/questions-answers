import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestion(question) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.sendAction('editQuestion', params, question);
    }
  }
});
