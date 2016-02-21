import Ember from 'ember';

const MapDialogComponent = Ember.Component.extend({
  willRender()
  {
    console.log("Render Map Dialog");
    var div = this.get("div");
    var location = this.get("location")
    this.set("currentLocation", this.get("location"));
        console.log(div+ " " +location);
    (location === undefined )? 1 : initMap(div,
            location.get("latitude"),
            location.get("longitude"),
            location.get("name"));
          }
});

MapDialogComponent.reopenClass({
    positionalParams: ['div', 'location']
});

function initMap(mapdiv, latitude, longitude, name) {
  var myLatLng = {lat: latitude, lng: longitude};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById(mapdiv), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 16
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: name
  });
}

export default MapDialogComponent;
