import Ember from 'ember';
import AuthorizationInitializer from 'carpe-diem/initializers/authorization';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | authorization', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AuthorizationInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
