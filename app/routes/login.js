import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        login(username, password) {
            this.get('authorization').login(username, password);
            this.transitionTo('user', username);
        }
    }
});
