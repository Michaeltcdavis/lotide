const eqArrays = function (arr1, arr2) {
  if (!(arr1.length === arr2.length)) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!(arr1[i] === arr2[i])) {
      return false;
    }
  }
  return true;
};

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

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
};

assertObjectsEqual({ a: 1, b: ['a', 3] }, { b: ['a', 3], a: 1 });