// The function will return a "slice of the array with elements taken from the beginning." 
// It should keep going until the callback / predicate returns a truthy value.
// To keep things simple, the callback should only be provided one value: The item in the array.
//Does your takeUntil function need to loop through the entire array once the callback returns a truthy value? 
//If not, how can we make it stop ?

const takeUntil = function (array, callback) {
  takenArray = [];
  for (let item of array) {
    if (callback(item)) {
      return takenArray;
    }
    takenArray.push(item);
  }
  return takenArray;
}

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2])
//[1, 2, 5, 7, 2]
console.log('---');



const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood'])
//['I\'ve', 'been', 'to', 'Hollywood']

const data3 = [1, 2, 5, 7, 2, 1, 2, 4, 5];
const results3 = takeUntil(data3, x => x < 0);
console.log(results3);
assertArraysEqual(results3, [1, 2, 5, 7, 2, 1, 2, 4, 5])
console.log('---');