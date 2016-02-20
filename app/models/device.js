import DS from 'ember-data';

export default DS.Model.extend({
  lastUpdate: DS.attr('string'),
  type: DS.attr('number'),
  user: DS.belongsTo('user')
});
