import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  author: DS.attr('string'),
  likes: DS.attr("number"),
  timestamp: DS.attr('string'),
  question: DS.belongsTo('question', { async: true })
});
