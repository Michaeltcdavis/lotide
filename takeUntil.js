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

module.exports = takeUntil;