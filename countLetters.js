// TESTING
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// COUNT ONLY
const countLetters = function (string) {
  string = string.toLowerCase();
  let result = {};
  for (let letter of string) {
    if (!result[letter]) {
      result[letter] = 0;
    }
    result[letter]++;
  }
  return result;
};

let result = countLetters('Hey there, my name is jeff');

assertEqual(result['h'], 2);
assertEqual(result[','], 1);