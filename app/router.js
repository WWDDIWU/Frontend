import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', {path: '/:user_id'}, function() {
    this.route('day', {path: '/day/:day_id'});
  });
});

export default Router;
