import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  username: Ember.computed('id', function() {
    return `${this.get('id')}`;
  }),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  metric: DS.attr('boolean'),
  fullname: Ember.computed('firstname', 'lastname', function() {
    return `${this.get('firstname')} ${this.get('lastname')}`;
  }),
  email: DS.attr('string'),
  devices: DS.hasMany('device'),
  home: DS.belongsTo('location', {inverse: null}),
  work: DS.belongsTo('location', {inverse: null}),
  other: DS.hasMany('location', {inverse: null}),
  timeline: DS.hasMany('day')
});
