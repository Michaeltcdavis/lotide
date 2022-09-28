const findKey = function (object, criteria) {
  //look through object keys
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (criteria(object[key])) {
        return key;
      }
    }
  }
  return 'Key not found';
}

module.exports = findKey;