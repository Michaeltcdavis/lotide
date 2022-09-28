const countOnly = function (array, objToCount) {
  let result = {};
  for (let item of array) {
    if (result[item]) {
      result[item]++
    }
    if (objToCount[item] && !result[item]) {
      result[item] = 1;
    }
  }
  return result;
};

module.exports = countOnly;