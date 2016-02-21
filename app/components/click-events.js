import Ember from 'ember';

const ClickEventsComponent = Ember.Component.extend({
  draggable: true,
  model(params){
    return params.event;
  },
  click() {
    var event = this.get("event");
      console.log(event.get("title"));
    var source = this.get("source");
    try {
      switch(source) {
        case "showmore": document.getElementById('collapse-event-'+event.get("id")).toggle();
          break;
        case "open": openEvent(event);
          break;
        case "openNew": document.getElementById('eveTitle').value = event.get("title");
                        document.getElementById('eveDescr').value = event.get("description");
                        document.getElementById('eveType').selected = event.get("type");
          break;
        default: openEvent(event);
      }
    }catch(e){console.log("Error while collapsse: "+e);}
    return true;
  },
  doubleClick(source, event){
    var event = this.get("events");
    source==="openNew" ? writeEvent(event) : 1;
  },
  mouseEnter(){
    var event = this.get("events");
    try {
      document.querySelector('#toast-'+event.get("id")).show()
    }catch(e){console.log("Error whole collapsse");}
  }
});

function writeEvent(event){
  console.log("Write in new event "+eve);
  console.log("Write in new event "+event.get(title));
  document.getQuery("#eveTitle").value = event.get("title");
  document.getQuery("#eveDescr").value = event.get("description");
  document.getQuery("#eve").selected = event.get("type");
}

ClickEventsComponent.reopenClass({
    positionalParams: ['source', 'event']
});

export default ClickEventsComponent;
