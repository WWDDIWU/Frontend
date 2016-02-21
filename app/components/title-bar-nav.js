import Ember from 'ember';

export default Ember.Component.extend({
    userIsLoggedIn: false,
    willRender() {
        this.set('userIsLoggedIn', this.get('authorization').isLoggedIn());
    },
    actions: {
        logout() {
            this.get('authorization').logout();
            this.set('userIsLoggedIn', this.get('authorization').isLoggedIn());
            this.get('router').transitionTo('login');
        }
    }
});