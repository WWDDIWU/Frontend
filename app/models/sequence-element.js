import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('number'),
  value: DS.attr('number'),
  day: DS.belongsTo('day'),
  object: Ember.computed('type', 'value', 'day', function() {
      if (this.get('type') === 0) {

      }
      return this.get('day').get('events');
  })
});

