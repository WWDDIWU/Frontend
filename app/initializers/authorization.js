import Ember from 'ember';

export function initialize(application) {
    application.inject('route', 'authorization', 'service:authorization');
    application.inject('component', 'authorization', 'service:authorization');
    application.inject('adapter', 'authorization', 'service:authorization');
    application.inject('component', 'router', 'router:main');
}

export default {
  name: 'authorization',
  initialize: initialize
};
