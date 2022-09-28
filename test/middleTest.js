const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [] from []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [] from [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [] from [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] from [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
  it("returns [2, 3] from [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

});

// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);