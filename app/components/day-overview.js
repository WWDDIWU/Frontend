import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super("currentLocation", {name:"test"});
    console.log(this.get("currentLocation"));
  },
  actions: {
    openEvent(params) {
      this.set("currentLocation", params);
      document.getElementById('mapDialogWindow').toggle();
    }
  }
});
