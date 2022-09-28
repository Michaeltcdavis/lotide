const without = function (array, toRemove) {
  let withoutArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!toRemove.includes(array[i])) {
      withoutArray.push(array[i])
    }
  }
  return withoutArray;
};

module.exports = without;