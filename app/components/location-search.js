import Ember from 'ember';

var LocationSearchComponent = Ember.Component.extend({
      needs: ['application'],
      showSorted: true,
      willRender() {
        const reg = new RegExp(this.get("input"), 'gi');
        const sorted = [];
        //console.log(this.get("locations"));
        try {this.get("locations").forEach(function (e) {
              if ((e.get("name").match(reg) || e.get("id").match(reg)) && sorted.indexOf(e) === -1) {
                sorted.push(e);
              }
            });
          //  sorted.forEach(function (e) {console.log(e.get("name"));});
            this.set("sortedLocations", sorted.splice(0, 5));
        } catch(e){console.log("Error while sorting: "+e);}
      }, actions: {
      fillForm(location) {
          this.set("showSorted", false);
          document.getElementById('locationname').value = location.get("name");
          document.getElementById('lati').value = location.get("latitude");
          document.getElementById('longi').value = location.get("longitude");
        }
      }
  });

LocationSearchComponent.reopenClass({
    positionalParams: ['input','locations']
});

export default LocationSearchComponent;
