import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('number'),
  priority: DS.attr('number'),
  title: DS.attr('string'),
  time: DS.attr('date'),
  description: DS.attr('string'),
  location: DS.belongsTo('location'),
  suggestion: DS.attr('boolean'),
  day: DS.belongsTo('day')
});
