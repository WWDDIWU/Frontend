import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.find('location', params);
  }
});
