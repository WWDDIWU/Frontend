import Ember from 'ember';

export default Ember.Route.extend({
  needs: ['application'],
  queryParams: {
    search: {
      refreshModel: true
    },
    eventSearch: {
      refreshModel: true
    }

  },
    model(params) {
        let locations = this.store.findAll('location');
        let events = this.store.findAll('event');
        return Ember.RSVP.hash({
            locations: locations,
            events: events
        });
    },
    actions: {
    }
});
