import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.store.createRecord('user', {
            id: 'kingmarv',
            email: 'marvin@mail.ru'
        });
        let day = this.store.createRecord('day', {
            id: 20160220,
            owner: this.store.peekRecord('user', 'kingmarv'),
            date: '2016-02-20',
            checksum: '2'
        });
        /*this.store.createRecord('event', {
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
        });*/
        var event = this.store.createRecord('event', {
            type: 0,
            priority: 0,
            title: 'Council of Ricks Meeting',
            description: 'The Meeting.. ugh whatever, Morty',
            start: new Date('2016-02-20T15:00:00'),
            end: new Date('2016-02-20T16:00:00'),
            suggestion: false
        });
        event.save();
        this.store.createRecord('sequence-element', {
            id: 1,
            type: 0,
            value: 3,
            day: this.store.peekRecord('day', 20160220)
        });
        console.log(this.store.peekRecord('sequence-element', 1).get('object'));
        return null;
    }
});
