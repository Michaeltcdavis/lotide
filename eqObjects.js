const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


//TESTING
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

const ef = { c: "1", d: ["2", 3] };
const f2e = { d: ["2", "3"], c: "1" };
assertEqual(eqObjects(cd, cd2), false);