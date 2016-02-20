import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hash: DS.attr('string'),
  salt: DS.attr('string'),
  email: DS.attr('string'),
  devices: DS.hasMany('device'),
  home: DS.belongsTo('location', {inverse: 'homes'}),
  work: DS.belongsTo('location', {inverse: 'works'}),
  other: DS.hasMany('location', {inverse: 'others'}),
  timeline: DS.hasMany('day')
});
