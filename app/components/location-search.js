import Ember from 'ember';

var LocationSearchComponent = Ember.Component.extend({
      needs: ['application'],
      showSorted: true,
      willRender() {
        const reg = new RegExp(this.get("input"), 'gi');
        const sorted = [];
        //console.log(this.get("locations"));
        //try {
          this.get("locations").forEach(function (e) {
              if ((e.get("name").match(reg) || e.get("id").match(reg))) {
                if(sorted.length > 0){
                    sorted.forEach(function (i) {
                    var nearBy = (zNK(i.get("longitude")) === zNK(e.get("longitude"))) &&
                                 (zNK(i.get("latitude")) === zNK(e.get("latitude")));
                    var sameName = i.get("name") === e.get("name");
                //    console.log(e.get("name")+" - nearBy: "+nearBy+ " // sameName: "+sameName);
                    if (!(sameName && nearBy)) {
                //      console.log("Add "+e.get("name")+" to location search - "+e.get("id"));
                      sorted.push(e);
                    }
                  });
                }else{
                  console.log("Add "+e.get("name")+" to location search - "+e.get("id"));
                  sorted.push(e);
                }
              }
            });
          //  sorted.forEach(function (e) {console.log(e.get("name"));});
            this.set("sortedLocations", sorted.splice(0, 5));
        //} catch(e){console.log("Error while sorting: "+e);}
      }, actions: {
      fillForm(location) {
          this.set("showSorted", false);
          document.getElementById('locationname').value = location.get("name");
          document.getElementById('lati').value = location.get("latitude");
          document.getElementById('longi').value = location.get("longitude");
        }
      }
  });

function zNK(x){
  console.log("2 after comma: "+x+" --> "+(Math.round(x * 100) / 100));
  return (Math.round(x * 100) / 100);
}
LocationSearchComponent.reopenClass({
    positionalParams: ['input','locations']
});

export default LocationSearchComponent;
