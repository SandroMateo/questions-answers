import Ember from 'ember';

export default Ember.Component.extend({
  showForm: Ember.inject.service('show-hide'),
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes')
      };
      this.sendAction('save', params);
      this.get('showForm').toggleNewQuestionForm();
      this.set('author', '');
      this.set('content', '');
      this.set('notes', '');
    }
  }
});
