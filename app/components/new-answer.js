import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  loggedIn: Ember.inject.service('logged-in'),
  showForm: Ember.inject.service('show-hide'),
  actions: {
    save() {
      var params = {
        content: this.get('content'),
        author: this.get('loggedIn').name,
        likes: 0,
        timestamp: moment().format('LL'),
        question: this.get('question')
      };
      this.sendAction('save', params);
      this.get('showForm').toggleNewAnswerForm();
      this.set('content', '');
      this.set('author', '');
    },

  }
});
