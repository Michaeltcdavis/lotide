const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {

  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello' from ['Hello']", () => {
    assert.strictEqual(head(['Hello']), 'Hello')
  });

});

// MANUAL TESTING REFERENCE
// const assertEqual = require('../assertEqual');
// const head = require('../head')

// assertEqual(head([5]), 5);
// assertEqual(head(['Hello']), "Hello");

