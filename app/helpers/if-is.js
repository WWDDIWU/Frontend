import Ember from 'ember';

export function ifIs(params/*, hash*/) {
//  console.log(params[0]+" === "+params[1] +" --> "+(params[0] === params[1]));
   return params[0] === params[1];
};

export default Ember.Helper.helper(ifIs);
