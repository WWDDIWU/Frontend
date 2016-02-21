import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user', {path: '/:user_id'}, function() {});
  this.route('day', {path: '/:user_id/day/:date'});
  this.route('login');
});

export default Router;
