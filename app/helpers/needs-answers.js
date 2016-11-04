import Ember from 'ember';

export function needsAnswers(params/*, hash*/) {
  var question = params[0];
  var answers = question._internalModel._relationships.initializedRelationships.answers.canonicalState.length;
  if(answers > 0) {
    return question._internalModel._data.content
  } else {
    return question._internalModel._data.content + " NEEDS ANSWERS!"
  }
}

export default Ember.Helper.helper(needsAnswers);
