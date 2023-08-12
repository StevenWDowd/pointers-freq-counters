"use strict";

// add whatever parameters you deem necessary & write docstring

// Takes two arrays, keys and values. Returns an object with keys:values, but with a max # of keys = to # of keys.
// If key index does not correspond to an existing index in the array, create the key:value pair as key:null.

// instantiate object (empty)
// loop through indices of keys, referencing the corresponding index of values.
// add key:value to the object, with some rules:
//    1) if the index is greater than value.length - 1, insert value as null.
// return object

/**
 * Takes two arrays, keys and values. Returns an object with keys:values, but with a max # of keys = to # of keys.
    If key index does not correspond to an existing index in the array, create the key:value pair as key:null.
 * @param {*} keys array of keys to add to object
 * @param {*} values array of values to add to object
 * @returns object containing corresponding keys and values
 */
function twoArrayObject(keys, values) {
  const zippedObject = {};

  for (let i = 0; i < keys.length; i++) {
    const curKey = keys[i];
    const curValue = values[i] || null;
    zippedObject[curKey] = curValue;
  }

  return zippedObject;
}
