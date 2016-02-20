import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: Ember.computed('name', function() {
    return `${this.get('id')}`;
  }),
  email: DS.attr('string'),
  devices: DS.hasMany('device'),
  home: DS.belongsTo('location', {inverse: 'homes'}),
  work: DS.belongsTo('location', {inverse: 'works'}),
  other: DS.hasMany('location', {inverse: 'others'}),
  timeline: DS.hasMany('day')
});
