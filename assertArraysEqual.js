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

module.exports = assertArraysEqual;
