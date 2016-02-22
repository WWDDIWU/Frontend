import Ember from 'ember';

var CreateEventComponent = Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set("events", this.get("events"));
    this.set("selectedLocation", {
        title: this.get("location.name"),
        lati: this.get("location.selLati"),
        longi: this.get("location.selLongi")
      });
  },
  didInsertElement(){
        this.set("selectedType", document.querySelector('#eveType').selected);
  },
  willUpdate(){
  },
  actions: {
    radioButtonChanged(changedto){
        console.log("Radio button changed to "+changedto);
        this.set("selectedType", changedto);
    },
    fillFormEvent(event) {
      console.log("Trigger event create-event");
      console.log(event.get("type"));
      this.set("eveTitle", event.get("title"));
      this.set("eveDescr", event.get("description"));
      this.set("eveStart", event.get("start"));
      // Uadate Radio
      this.set("selectedType", event.get("type"));
      document.querySelector('#eveType').selected = event.get("type");
      event.get("duration") ? this.set("eveDur", event.get("duration")): this.set("eveEnd", event.get("end"));;
    }
  }
});



CreateEventComponent.reopenClass({
    positionalParams: ['events', "location.name", "location.selLati", "location.selLongi"]
});
export default CreateEventComponent;
