import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        let user = this.store.peekRecord('user', params.user_id);
        let day;
        /*this.store.queryRecord('day', {user: {name: user.get('name')}, date: params.date}).then(function(record) {
            day = record;
        });*/
        return Ember.RSVP.hash({
            user: user,
            day: day
        });
    }
});
