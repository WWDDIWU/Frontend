import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://169.53.137.142:3000',
    namespace: 'api',
    headers: {
        'Authorization': 'Bearer ' + Cookies.get('token')
    }
});