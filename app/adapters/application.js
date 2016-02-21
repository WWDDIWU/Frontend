import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://192.168.0.16:3000',
    namespace: 'api',
    headers: {
        'Authorization': 'Bearer ' + Cookies.get('token')
    }
});