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
        saveEvent(name, selLati, selLongi, eveTitle, eveDescr, eveStart, eveEnd, eveDur) {
            console.log(name);
          let that = this;
          let location = this.store.createRecord('location', {
              name: name,
              latitude: selLati,
              longitude: selLongi
          });
          location.save().then(function(location) {
              let event = that.store.createRecord('event', {
                  type: parseInt(Ember.$('#eveType paper-radio-button[aria-checked=true]').attr('name')),
                  title: eveTitle,
                  description: eveDescr,
                  start: new Date(eveStart),
                  end: new Date(eveEnd),
                  location: location
              });
              event.save();
          });
      }
    }
});
