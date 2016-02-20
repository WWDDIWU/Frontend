import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        this.store.createRecord('user', {
            id: 'kingmarv',
            email: 'marvin@mail.ru'
        });
        this.store.createRecord('day', {
            id: 20160220,
            owner: this.store.peekRecord('user', 'kingmarv'),
            date: '2016-02-20',
            checksum: '2'
        });
        this.store.createRecord('event', {
            id: 1,
            type: 0,
            priority: 0,
            title: 'An event',
            time: '2016-02-20T15:00',
            description: 'A description',
            location: null,
            suggestion: 0,
            day: this.store.peekRecord('day', 20160220)
        });
        return this.store.peekRecord('user', params.user_id);
    }
});
