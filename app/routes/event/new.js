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
          let that = this;
          let location = this.store.createRecord('location', {
              name: Ember.$('#locationname').val(),
              latitude: Ember.$('#lati').val(),
              longitude: Ember.$('#longi').val()
          });
          location.save().then(function(location) {
              let event = that.store.createRecord('event', {
                  type: parseInt(Ember.$('#eveType paper-radio-button[aria-checked=true]').attr('name')),
                  title: Ember.$('#eveTitle').val(),
                  description: Ember.$('#eveDescr').val(),
                  start: new Date(Ember.$('#eveStart').val() + 'T' + Ember.$('#fromTime .timepicker-display .timepicker-hour .timepicker-h').html() + ':' + Ember.$('#fromTime .timepicker-display .timepicker-minute .timepicker-m').html()),
                  end: new Date(Ember.$('#eveEnd').val() + 'T' + Ember.$('#toTime .timepicker-display .timepicker-hour .timepicker-h').html() + ':' + Ember.$('#toTime .timepicker-display .timepicker-minute .timepicker-m').html()),
                  location: location
              });
              event.save();
          });
      }
    }
});
