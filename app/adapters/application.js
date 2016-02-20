import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://ttdennis.com:6969',
    namespace: 'api'
});