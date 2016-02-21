import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let locations = this.store.findAll('location');
        let events = this.store.findAll('event');
        return Ember.RVSP.hash({
            locations: locations,
            events: events
        })
    }
});
