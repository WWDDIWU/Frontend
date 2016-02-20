import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  events: DS.hasMany('event'),
  homes: DS.hasMany('user', {inverse: 'home'}),
  works: DS.hasMany('user', {inverse: 'work'}),
  others: DS.hasMany('user', {inverse: 'other'})
});
