import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    getToken() {
        let token = Cookies.get('token');
        if (token !== null || token !== undefined || token !== '') {
            return token;
        } else {
            return undefined;
        }
    },
    isLoggedIn() {
        if (this.getToken() !== undefined) {
            return true;
        } else {
            return false;
        }
    },
    login(username, password) {
        let that = this;
        let adapter = this.get('store').adapterFor('application');
        Ember.$.ajax({
            url: adapter.get('host') + '/' + adapter.get('namespace') + '/' + 'authenticate',
            method: 'POST',
            data: {
                username: 'kingmarv',
                password: 'test'
            },
            success: function(data) {
                Cookies.set('token', data.token);
            },
            error: function(data) {
                Cookies.remove('token');
            }
        });
    }
});
