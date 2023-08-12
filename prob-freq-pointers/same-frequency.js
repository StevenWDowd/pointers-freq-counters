// add whatever parameters you deem necessary & write docstring

// Given two positive integers, find out if the two numbers have the same frequency of digits.

// accepts 2 numbers
// turns both numbers into strings, then create a frequency counter for each.
//    1) if strings are not equal length, immediately return false.
// compare each frequency counter and return true if equal, false if not.

/** Takes 2 positive integers and returns true if they have the same frequency of digits, false otherwise */
function sameFrequency(num1, num2) {
  const num1String = JSON.stringify(num1);
  const num2String = JSON.stringify(num2);
  if (num1String.length !== num2String.length) {
    return false;
  }

  const freq1 = buildFreqCounter(num1String);
  const freq2 = buildFreqCounter(num2String);

  return JSON.stringify(freq1) === JSON.stringify(freq2); // Other option to iterate through object keys and check for equality, returning false if !== and true after leaving the loop
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
