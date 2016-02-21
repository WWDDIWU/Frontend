import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        let that = this;
        let adapter = this.store.adapterFor('application');
        let storeToken = function(token) {
            that.store.createRecord('user', {
                'id': 'kingmarv',
                'token': token
            });
            that.transitionTo('user', 'kingmarv');
        }
        $.ajax({
            url: adapter.get('host') + '/' + adapter.get('namespace') + '/' + 'authenticate',
            method: 'POST',
            data: {
                username: 'kingmarv',
                password: 'test'
            },
            success: function(data) {
                storeToken(data.token)
            },
            error: function(data) {
                console.log(data.status);
            }
        });
    }
});
