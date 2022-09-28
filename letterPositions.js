const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let current = sentence[i];
    if (!results[current] && sentence[i] !== ' ') {
      results[current] = [];
    }
    if (sentence[i] !== ' ') {
      results[current].push(i)
    }
  }
  return results;
};

module.exports = letterPositions;