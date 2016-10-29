import Ember from 'ember';

export default Ember.Component.extend({
  showForm: Ember.inject.service('show-hide'),
  actions: {
    save() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        likes: 0,
        question: this.get('question')
      };
      this.sendAction('save', params);
      this.get('showForm').toggleNewAnswerForm();
      this.set('content', '');
      this.set('author', '');
    },

    showAnswerForm() {
      this.get('showForm').toggleNewAnswerForm();
    },
  }
});
