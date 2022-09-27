const flatten = function (array) {
  let flatArray = []
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let item of element) {
        flatArray.push(item);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray
};

//TESTING
const assertArraysEqual = function (actualArr, expectedArr) {
  if (!(actualArr.length === expectedArr.length)) {
    console.log(`🛑🛑🛑 Assertion Failed: length of ${actualArr} !== length of ${expectedArr}`);
    return;
  }
  for (let i = 0; i < actualArr.length; i++) {
    if (!(actualArr[i] === expectedArr[i])) {
      console.log(`🛑🛑🛑 Assertion Failed at index ${i}: ${actualArr} !== ${expectedArr}`);
      return;
    }
  }
  console.log(`🟢🟢🟢 Assertion Passed: ${actualArr} === ${expectedArr}`);
};

console.log(flatten([1, 2, [3, [4, 8]], 5, [6]]));
console.log([1, 2, 3, [4, 8], 5, 6]);
assertArraysEqual(flatten([1, 2, [3, [4, 8]], 5, [6]]), [1, 2, 3, [4, 8], 5, 6]) //assertArraysEqual does not work for nested arrays
assertArraysEqual(flatten(['1', '2', ['3', '4'], '5', ['6']]), ['1', '2', '3', '4', '5', '6']);