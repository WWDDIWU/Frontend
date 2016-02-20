import Ember from 'ember';

export function dayProgress(params) {
    let today = new Date();
    let millisecondsToday = today.getTime() - new Date(today.getFullYear().toString() + '-' + (today.getMonth() + 1).toString() + '-' + today.getDate().toString()).getTime();
    const millisecondsADay = 86400000;
    if(params[0] === true) {
         return `${Math.round((millisecondsToday/millisecondsADay)*100)}`;
    }
    return `${(millisecondsToday/millisecondsADay)*100}`;
}

export default Ember.Helper.helper(dayProgress);
