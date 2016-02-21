import Ember from 'ember';

export default Ember.Route.extend({
    redirect() {
        if(this.get('authorization').isLoggedIn()) {
            this.transitionTo('user', this.get('authorization').getUser());
        }
    },
    actions: {
        login(username, password) {
            this.get('authorization').login(username, password, function() {
                window.location.href = '/' + username;
            });
        }
    }
});
