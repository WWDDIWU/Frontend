import Ember from 'ember';

export function toggleVar(params/*, hash*/) {
  return params.toggle();
}

export default Ember.Helper.helper(toggleVar);
