import Ember from 'ember';

export default Ember.Service.extend({
  showNewQuestionForm: false,
  showUpdateQuestioForm: false,
  showNewAnswerForm: false,

  toggleNewQuestionForm() {
    if(this.get('showNewQuestionForm')) {
      this.set('showNewQuestionForm', false);
    } else {
      this.set('showNewQuestionForm', true);
    }
  },

  toggleUpdateQuestionForm() {
    if(this.get('showUpdateQuestionForm')) {
      this.set('showUpdateQuestionForm', false);
    } else {
      this.set('showUpdateQuestionForm', true);
    }
  },

  toggleNewAnswerForm() {
    if(this.get('showNewAnswerForm')) {
      this.set('showNewAnswerForm', false);
    } else {
      this.set('showNewAnswerForm', true);
    }
    console.log(this.get('showNewAnswerForm'));
  }
});
