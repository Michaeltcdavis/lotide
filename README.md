# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @michaeltcdavis/lotide`

**Require it:**

`const _ = require('@michaeltcdavis/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: takes an array and returns the first element
* `tail(array)`: takes an array and returns the array without the first element
* `middle(array)`: takes an array and returns the middle element (middle two elements for an even array)
* `assertArraysEqual(actualArray, expectedArray)`: prints to console whether two arrays are equal
* `assertEqual(actual, expected)`: prints to console whether two values are equal
* `assertObjectsEqual(ActualObj, expectedObj)`: prints to console whether two objects are equal
* `countLetters(string)`: returns the number of each letter in a given string
* `countOnly(array, objectToCount)`: returns an object of the occurences from the given array of the keys to find which are indicated in the given object
* `eqArrays(array1, array2)`: returns true or false depending on whether the given arrays are equal
* `eqObjects(object1, object2)`:returns true or false depending on whether the given objects are equal
* `findKey(object, criteriaFunction)`: returns the key of the first occurence of the given criteria function returning true for a given objects keys
* `findKeyByValue(object, Value)`: returns the key of a given object which has a value matching the given value
* `flatten(array)`: returns an array which un-nests one level of nested arrays
* `letterPositions(sentence)`: returns an object containing arrays of all the indexes of each letter's occurence in a given sentence (string)
* `map(array, callback)`: takes an array and a function and returns a new array with the function applied to each element
* `takeUntil(array, callback)`: copies an array element by element until the given callback function returns true
* `without(array, toRemove)`: takes an array and an array with values to remove and returns a new array which does not include any elements matching the elements in the toRemove array