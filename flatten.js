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

module.exports = flatten;