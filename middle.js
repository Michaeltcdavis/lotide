const middle = function (array) {
  let middleArr = [];
  if (array.length < 3) {
    return middleArr;
  }
  if (array.length % 2 === 0) {
    //console.log('array is even, array.length is ', array.length); //TEST POINT
    middleArr.push(array[(array.length / 2) - 1])
    middleArr.push(array[(array.length / 2)])
    //console.log(middleArr);
  } else {
    //console.log('array is odd, array.length is ', array.length); //TEST POINT
    middleArr.push(array[(array.length / 2) - 0.5])
    //console.log(middleArr); //TEST POINT
  }
  return middleArr;
};

module.exports = middle;