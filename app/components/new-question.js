import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  showForm: Ember.inject.service('show-hide'),
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
        notes: this.get('notes'),
        timeout: moment().format('LL')
      };
      console.log(params);
      this.sendAction('save', params);
      this.get('showForm').toggleNewQuestionForm();
      this.set('author', '');
      this.set('content', '');
      this.set('notes', '');
    }
  }
});
