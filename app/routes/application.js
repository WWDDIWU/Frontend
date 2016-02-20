import Ember from 'ember';

export default Ember.Route.extend({
    model() {
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
            id: 2,
            type: 0,
            priority: 0,
            title: 'An event',
            start: '2016-02-20T15:00',
            end: '2016-02-20T16:00',
            duration: 3600000,
            description: 'A description',
            location: null,
            suggestion: 0,
            day: this.store.peekRecord('day', 20160220)
        });
        var device = this.store.createRecord('device', {
            lastUpdate: 'd',
            type: 0,
            user: this.store.peekRecord('user', 'kingmarv')
        });
        device.save();
        return null;
    }
});
