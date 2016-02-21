import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel() {
        if (!this.get('authorization').isLoggedIn()) {
            this.transitionTo('login');
        }
    },
    model() {
        let that = this;
        return null;
    }
});
