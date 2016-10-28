import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        likes: 0,
        question: this.get('question')
      };
      this.sendAction('save', params);
      this.set('content', '');
      this.set('author', '');
    }
  }
});
