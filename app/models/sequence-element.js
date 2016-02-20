import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('number'),
  value: DS.attr('number'),
  day: DS.belongsTo('day')
});
