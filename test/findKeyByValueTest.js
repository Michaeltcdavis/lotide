//TESTING
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//FUNCTION
//if no key is found, return undefined
const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
}




const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
const empty = {
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(empty, "That '70s Show"), undefined);