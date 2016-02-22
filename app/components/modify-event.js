import Ember from 'ember';

const ModifyEvent = Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.set("event", this.get("event"));
  }
});

ModifyEvent.reopenClass({
    positionalParams: ['event']
});


export default ModifyEvent;
