import Ember from 'ember';

export default Ember.Component.extend({
  clock: Ember.inject.service('real-time-clock'),
  init () {
    this._super(...arguments);
    var time = Ember.computed('clock.time', function() {
      return this.get('clock.time');
    });
    var hours= Ember.computed('clock.date', function() {
       return this.get('clock.date').getHours();
    });
    var mins= Ember.computed('clock.date', function() {
       return this.get('clock.date').getMinutes();
    });
    var secs= Ember.computed('clock.date', function() {
       return this.get('clock.date').getSeconds();
    });
    this.set("hours",hours);
    this.set("mins",mins);
    this.set("secs",secs);
  }
});
