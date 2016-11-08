import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  showForm: Ember.inject.service('show-hide'),
  loggedIn: Ember.inject.service('logged-in'),
  actions: {
    save() {
      var params = {
        author: this.get('loggedIn').name,
        content: this.get('content'),
        notes: this.get('notes'),
        timeout: moment().format('LL')
      };
      this.sendAction('save', params);
      this.get('showForm').toggleNewQuestionForm();
      this.set('author', '');
      this.set('content', '');
      this.set('notes', '');
    },

    showNewQuestion() {
      this.get('showForm').toggleNewQuestionForm();
    }
  }
});
