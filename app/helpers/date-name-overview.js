import Ember from 'ember';

var days = [
    ["Monday", "Mon"],
    ["Tuesday", "Tue"],
   ["Wednesday", "Wed"],
    ["Thursday", "Thur"],
    ["Friday", "Fri"],
    ["Saturday", "Sat"],
    ["Sunday" , "Sun"]
];

var months = [
  ["January", "Jan"],
  ["February", "Feb"],
  ["March", "Mar"],
  ["April", "Apr"],
  ["May", "May"],
  ["June", "June"],
  ["July", "July"],
  ["August", "Aug"],
  ["September", "Sept"],
  ["October", "Oct"],
  ["November", "Nov"],
  ["December", "Dec"]
];

export function dateNameOverview(params/*, hash*/) {
    console.log(params);
  var date = params[0];
  switch (params[1]) {
    case "dayname": return days[date.getDay()][0];
    case "dayshort": return days[date.getDay()][1];
    case "date": return date.getDate();
    case "year": return date.getFullYear();
    case "monthname": return months[date.getMonth()][0];
    case "monthshort": return months[date.getMonth()][1];
    case "daystring": return ((date.getMonth()+1)+"/"+(date.getDate())+"/"+(date.getFullYear()));
    case "timestring": return (date.getHours()+":"+(date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()));
    default: return days[date.getDay()][0];
  }
}

export default Ember.Helper.helper(dateNameOverview);
