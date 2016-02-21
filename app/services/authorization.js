import Ember from 'ember';

export default Ember.Service.extend({
    store: Ember.inject.service(),
    getToken() {
        let token = Cookies.get('token');
        if (token !== null && token !== undefined && token !== '') {
            return token;
        } else {
            return undefined;
        }
    },
    getUser() {
        try {
            return JSON.parse(atob(this.getToken().split('.')[1])).username;
        } catch (e) {
            return undefined;
        }
    },
    getUserMail() {
        try {
            return JSON.parse(atob(this.getToken().split('.')[1])).email;
        } catch (e) {
            return undefined;
        }
    },
    isLoggedIn() {
        if (this.getToken() !== undefined && this.getUser() !== undefined && this.getUserMail() !== undefined) {
            return true;
        } else {
            Cookies.remove('token');
            return false;
        }
    },
    login(username, password, callback) {
        let that = this;
        let adapter = this.get('store').adapterFor('application');
        Ember.$.ajax({
            url: adapter.get('host') + '/' + adapter.get('namespace') + '/' + 'authenticate',
            method: 'POST',
            data: {
                username: username,
                password: password
            },
            success: function(data) {
                Cookies.set('token', data.token);
                callback();
            },
            error: function(data) {
                Cookies.remove('token');
                return false;
            }
        });
    },
    logout() {
        Cookies.remove('token');
    }
});
