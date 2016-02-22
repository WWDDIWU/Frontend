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
      googleAutocomplete(){
        initAutocomplete();
        return true;
      },
      saveEvent(name, selLati, selLongi, eveTitle, eveDescr, eveStart, eveEnd, eveDur) {
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


var placeSearch, autocomplete, success=true;
var componentForm = {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};
function initAutocomplete() {
  console.log("Activate Google API!");
  console.log(document.getElementById('searchLocationsGoogle'));
  try{
    document.getElementById('searchLocationsGoogle').value = "";
      autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('searchLocationsGoogle')),
        {types: ['geocode']});
      google.maps.event.addListener(autocomplete, 'place_changed', fillInAddress);
      success = true;
  } catch(e){
    success = false;
    console.log("Error while loading string search API: "+e);
  } finally {
    success ? document.querySelector('#googleAPI').show() : document.querySelector('#googleAPIerror').show();
  }
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  console.log("Search updated");
  var place = autocomplete.getPlace();
  document.getElementById('locationname').value = place.name;
  document.getElementById('lati').value = place.geometry.location.lat();
  document.getElementById('longi').value = place.geometry.location.lng();

}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}
