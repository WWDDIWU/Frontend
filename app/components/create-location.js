import Ember from 'ember';

var CurrentLocationComponent = Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set("locations", this.get("locations"));
  },
  didInsertElement(){
    console.log("Activate Google API!");
    console.log("Input:"+document.getElementById('searchLocationsGoogle'));
     var  autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('searchLocationsGoogle')),
        {types: ['geocode']});

        var that = this;
      var fillEmberInput = function(){
        console.log("Search updated ");
        var place = autocomplete.getPlace();
        that.set("name", place.name);
        that.set("selLati", place.geometry.location.lat());
        that.set("selLongi", place.geometry.location.lng());
      };

       autocomplete.addListener('place_changed', fillEmberInput);
  },
  actions: {
  }
});

CurrentLocationComponent.reopenClass({
    positionalParams: ['locations']
});



var placeSearch, autocomplete, success=true;

function initAutocomplete() {
  console.log("Activate Google API!");
  console.log(document.getElementById('searchLocationsGoogle'));
  try{
    document.getElementById('searchLocationsGoogle').value = "";
      autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('searchLocationsGoogle')),
        {types: ['geocode']});
      //google.maps.event.addListener(autocomplete, 'place_changed', fillInAddressEmber);
      success = true;
  } catch(e){
    success = false;
    console.log("Error while loading string search API: "+e);
  } finally {
    console.log(document.querySelector('#googleAPI').show());
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



export default CurrentLocationComponent;
