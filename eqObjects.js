const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (object1.hasOwnProperty(key)) {
        //check if current key's value is an array
        if (Array.isArray(object1[key])) {
          //call eqArrays function and if false, return false
          if (!eqArrays(object1[key], object2[key])) {
            //console.log('arrays don\'t match'); //TEST POINT
            return false;
          }
        }
        //if value is not an array, check whether values of same key are equal
        else if (object1[key] !== object2[key]) {
          //console.log('keys don\'t match');  //TEST POINT
          return false;
          }
        }
      }
      return true;
    }
    //console.log('wrong length'); //TEST POINT
    return false;
  }

module.exports = eqObjects;