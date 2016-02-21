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
                console.log(toMatch);
                return true;
              }
            }
          }
          return false;
        };
        const reg = new RegExp(this.get("input"), 'gi');
        const regLoc = new RegExp(this.get("selectedname"), 'gi');
        const sorted = [];
        var sL = {title:"", longi:5,lati: 0};
        sL = {
          title: this.get("selectedname"),
          longi: this.get("selectedLongi"),
          lati: this.get('selectedLati')
        };
        typeof(sL.title)==="undefined" ?   sL.title="" : 1;
        //try {
          this.get("events").forEach(function (e) {
              if (reg.findMatch(
                    e.get("title"),
                    e.get("id"),
                    e.get("description"),
                    e.get("start"),
                    e.get("end"),
                    e.get("location").get("title"))) {
                sorted.push(e);
              }

              /*else  if ((( (zNK(sL.longi) === zNK(e.get("location").get("longitude")) ) &&
               (zNK(sL.lati) === zNK(e.get("location").get("latitude")))
             ) ||  sL.title.match(regLoc) ) && sorted.indexOf(e) === -1)
              {
                sorted.push(e);
              }*/
            });

            sorted.forEach(function (e) {//console.log("Matching events: "+ e.get("title"));
          });
            this.set("sortedEvents", sorted);
        //} catch(e){console.log("Error while sorting events: "+e);}
      }, actions: {
      fillForm(event) {

        }
      }
  });

EventSearchComponent.reopenClass({
    positionalParams: ['input','events','selectedname','selectedLati','selectedLongi']
});

function zNK(x){
  return (Math.round(x * 100) / 100);
}

export default EventSearchComponent;
