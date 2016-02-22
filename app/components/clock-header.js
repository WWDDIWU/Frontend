import Ember from 'ember';

export default Ember.Component.extend({
  clock: Ember.inject.service('real-time-clock'),
  init () {
    this._super(...arguments);
    var time = Ember.computed('clock.time', function() {
      return this.get('clock.time');
    });
    var hours= Ember.computed('clock.date', function() {
       return ("0" + this.get('clock.date').getHours()).substr(-2);
    });
    var mins= Ember.computed('clock.date', function() {
       return ("0" + this.get('clock.date').getMinutes()).substr(-2);
    });
    var secs= Ember.computed('clock.date', function() {
       return ("0" + this.get('clock.date').getSeconds()).substr(-2);
    });
    this.set("hours",hours);
    this.set("mins",mins);
    this.set("secs",secs);
  }
});
