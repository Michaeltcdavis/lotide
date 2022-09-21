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
}

const middle = function (array) {
  let middleArr = [];
  if (array.length < 3) {
    return middleArr;
  }
  if (array.length % 2 === 0) {
    //console.log('array is even, array.length is ', array.length); //TEST POINT
    middleArr.push(array[(array.length / 2) - 1])
    middleArr.push(array[(array.length / 2)])
    //console.log(middleArr);
  } else {
    //console.log('array is odd, array.length is ', array.length); //TEST POINT
    middleArr.push(array[(array.length / 2) - 0.5])
    //console.log(middleArr); //TEST POINT
  }
  return middleArr;
};

assertArraysEqual(middle([]), [])
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])