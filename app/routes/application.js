import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        /*this.store.createRecord('user', {
            id: 'kingmarv',
            email: 'marvin@mail.ru'
        });
        this.store.createRecord('day', {
            id: 20160220,
            owner: this.store.peekRecord('user', 'kingmarv'),
            date: new Date('2016-02-20'),
            checksum: '2'
        });
        this.store.createRecord('day', {
            id: 20160221,
            owner: this.store.peekRecord('user', 'kingmarv'),
            date: new Date('2016-02-20'),
            checksum: '2'
        });
        this.store.createRecord('event', {
            id: 2,
            type: 1,
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
        this.store.createRecord('event', {
            id: 1,
            type: 2,
            priority: 0,
            title: 'Council of Ricks Meeting',
            description: 'The Meeting.. ugh whatever, Morty',
            start: new Date('2016-02-20T15:00:00'),
            end: new Date('2016-02-20T16:00:00'),
            suggestion: false,
            day: this.store.peekRecord('day', 20160220)
        });
        this.store.createRecord('event', {
            id: 3,
            type: 3,
            priority: 0,
            title: 'Council of Ricks Meeting',
            description: 'The Meeting.. ugh whatever, Morty',
            start: new Date('2016-02-20T15:00:00'),
            end: new Date('2016-02-20T16:00:00'),
            suggestion: false,
            day: this.store.peekRecord('day', 20160220)
        });
        this.store.createRecord('event', {
            id: 4,
            type: 2,
            priority: 0,
            title: 'Council of Ricks Meeting',
            description: 'The Meeting.. ugh whatever, Morty',
            start: new Date('2016-02-20T15:00:00'),
            end: new Date('2016-02-20T16:00:00'),
            suggestion: false,
            day: this.store.peekRecord('day', 20160221)
        });
        this.store.createRecord('event', {
            id: 5,
            type: 1,
            priority: 0,
            title: 'Council of Ricks Meeting',
            description: 'The Meeting.. ugh whatever, Morty',
            start: new Date('2016-02-20T15:00:00'),
            end: new Date('2016-02-20T16:00:00'),
            suggestion: false,
            day: this.store.peekRecord('day', 20160221)
        });*/
        
        let storedUsers = this.store.peekAll('user');
        let token;
        let tokenSet = false;
        for (let i = 0; i < storedUsers.content.length; i++) {
            token = storedUsers.objectAt(i).get('token');
            if (token !== null && token !== undefined) {
                tokenSet = true;
                break;
            }
        }
        if (!tokenSet) {
            this.transitionTo('login');
        }
        return null;
    }
});
