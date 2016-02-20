import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('user'),
  date: DS.attr('date'),
  checksum: DS.attr('string'),
  events: DS.hasMany('event'),
  timeToGetFromAtoB: DS.hasMany('ttgfatb'),
  sequence: DS.hasMany('sequence-element')
});
