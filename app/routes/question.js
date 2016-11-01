import Ember from 'ember';

export default Ember.Route.extend({
  showForm: Ember.inject.service('show-hide'),
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    updateQuestion(params, question) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },

    destroyQuestion(question) {
      var question_answers = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(question_answers).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', question);
    },

    upvote(answer) {
      var likes = answer.get('likes');
      likes++;
      answer.set('likes', likes);
      answer.save();
      this.transitionTo('question');
    },

    downvote(answer) {
      var likes = answer.get('likes');
      likes--;
      answer.set('likes', likes);
      answer.save();
      this.transitionTo('question');
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
    }
  }
});
