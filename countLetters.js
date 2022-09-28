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

module.exports = countLetters;