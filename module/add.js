const numberchecker = require("./numberchecker");

module.exports = {
  add : function(first, second) {
    if(numberchecker(first) === true) {
      return first + second;
    }
  }
}





// function add (first, second) {
//   return first + second; 
// }