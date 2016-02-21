import Ember from 'ember';

const ClickEventsComponent = Ember.Component.extend({
  draggable: true,
  model(params){
    return params.event;
  },
  click() {
    var event = this.get("events");
    var source = this.get("source");
      switch(source) {
        case "showmore": document.getElementById('collapse-event-'+event.get("id")).toggle();
          break;
        case "open": openEvent(event);
          break;
        default: openEvent(event);
      }
    return true;
  },
  doubleClick(){
    var event = this.get("events");
    openEvent(event);
  },
  mouseEnter(){
    var event = this.get("events");
    document.querySelector('#toast-'+event.get("id")).show()
  }
});


ClickEventsComponent.reopenClass({
    positionalParams: ['source', 'events']
});

export default ClickEventsComponent;
