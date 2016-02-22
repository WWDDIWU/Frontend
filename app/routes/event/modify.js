import Ember from 'ember';

var ModifyEventRoute = Ember.Route.extend({
  init(){
    console.log(this.get("event"));
    this.set("event", this.get("event"));
  }
});


ModifyEventRoute.reopenClass({
    positionalParams: ['event']
});

export default ModifyEventRoute;
