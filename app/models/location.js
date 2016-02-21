import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  events: DS.hasMany('event'),
  user: DS.belongsTo('user', {inverse: null});
});
