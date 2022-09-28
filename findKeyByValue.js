const findKeyByValue = function (object, value) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
        return key;
      }
    }
  }
}

module.exports = findKeyByValue;