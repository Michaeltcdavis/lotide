const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence[i];
    if (!results[current] && sentence[i] !== ' ') {
      results[current] = [];
    }
    if (sentence[i] !== ' ') {
      results[current].push(i)
    }
  }
  return results;
};

// TESTING
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

let result1 = letterPositions('hello there')

assertArraysEqual(result1.h, [0, 7])
assertArraysEqual(result1.e, [1, 8,10])
assertArraysEqual(result1.l, [2,3])
assertArraysEqual(result1.o, [4])
assertArraysEqual(result1.t, [6])
assertArraysEqual(result1.r, [9])