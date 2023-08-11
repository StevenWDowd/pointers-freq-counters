"use strict";

// add whatever parameters you deem necessary & write doc comment
/*
inputs:Two strings, word and letters
outputs: boolean, true or false
1st step, build freq counter for each input (wordfreq, lettersFreq)
2nd step: compare the freq counters
  for each key in wordFreq, check for it in lettersFreq
    if not, return false
  if that key is present, make sure the value in wordFreq is
  less than or equal to the value in lettersFreq
    if greater, return false

  if we have not returned false by now, return true
*/
/**
 * Accepts a target word and a collection of letters. Returns true
 * if the word can be constructed from the given letters. Returns false
 * otherwise.
 * @param {*} word A string representing a word
 * @param {*} letters A string representign letters available for use
 * @returns A boolean value
 */
function canConstructWord(word, letters) {
  const wordFreq = buildFreqCounter(word);
  const letterFreq = buildFreqCounter(letters);

  for (let key in wordFreq) {
    if (!(key in letterFreq)) {
      return false;
    }
    if (wordFreq[key] > letterFreq[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Builds a frequency counter object from an iterable.
 *
 *
 */
function buildFreqCounter(item) {
  const freqCounter = {};
  for (let i = 0; i < item.length; i++) {
    const current = freqCounter[item[i]] || 0;
    freqCounter[item[i]] = current + 1;
  }
  return freqCounter;
}
