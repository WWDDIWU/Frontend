import Ember from 'ember';

var EventSearchComponent = Ember.Component.extend({
      needs: ['application'],
      showSorted: true,
      willRender() {
        RegExp.prototype.findMatch = function (...args) {
          for(let arg in args) {
            const toMatch = args[arg];
            if(toMatch) {
              if (this.exec(typeof toMatch === "string" ? toMatch : toMatch.toString())) {
                //console.log(toMatch);
                return true;
              }
            }
          }
          return false;
        };
        const reg = new RegExp(this.get("input"), 'gi');
        const regLoc = new RegExp(this.get("selectedLocation").title, 'gi');
        const sorted = [];
        var selectedLocation = this.get("selectedLocation");
        //try {
          this.get("events").forEach(function (e) {
            console.log("Long: "+e.get("location").get("longitude"));
            var nearBy = (zNK(selectedLocation.longi) === zNK(e.get("location").get("longitude"))) &&
                         (zNK(selectedLocation.lati) === zNK(e.get("location").get("latitude")));
            var sameMeta = reg.findMatch(
                                e.get("title"),
                                e.get("id"),
                                e.get("description"),
                                e.get("start"),
                                e.get("end"),
                                e.get("location").get("title"));
            var sameSelectedLocation = regLoc.findMatch(e.get("location").get("title"));
              if ( nearBy || sameMeta || sameSelectedLocation ) {
                console.log('nearBy '+nearBy+" // sameMeta "+sameMeta+" // sameSelectedLocation "+ sameSelectedLocation);

                e.set("nearBy", nearBy);
                e.set("sameMeta", sameMeta);
                e.set("sameSelectedLocation", sameSelectedLocation);
                sorted.push(e);
              }
            });

            sorted.forEach(function (e) {//console.log("Matching events: "+ e.get("title"));
               });
            this.set("sortedEvents", sorted);
        //} catch(e){console.log("Error while sorting events: "+e);}
      }, actions: {
      fillFormEvent(event) {
            console.log("Trigger event event-search");
            //this.sendAction("fillFormEvent", event);
            this.get('fillFormEvent')(event);
        }
      }
  });

EventSearchComponent.reopenClass({
    positionalParams: ['input','events','selectedLocation']
});

function zNK(x){
  console.log("2 after comma: "+x+" --> "+(Math.round(x * 100) / 100));
  return (Math.round(x * 100) / 100);
}

export default EventSearchComponent;
