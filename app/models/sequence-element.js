import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('number'),
  value: DS.attr('number'),
  day: DS.belongsTo('day'),
  object: Ember.computed('type', 'value', 'day', function() {
      if (this.get('type') === 0) {
          return this.get('day').get('events').objectAt(this.get('value'));
      } else if (this.get('type') === 1) {
          return this.get('day').get('ttgfatbs').objectAt(this.get('value'));
      } else {
          return undefined;
      }
  })
});

