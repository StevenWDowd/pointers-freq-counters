"use strict";
// add whatever parameters you deem necessary & write docstring


// This should take two strings, s1 and s2. It checks whether the characters in s1`form a subsequence of the characters in `s2.
// In other words, this should check whether the characters in the s1 appear somewhere in the s2, without their order changing.

// Takes 2 strings.
// Creates pointer for string2.
// Iterates through each letter of string1
//  1) Inside this loop, increment pointer for string2 until we find that letter.
//  2) Once we find that letter, we will proceed in the loop

//    Return false if at any point we reach an index that doesn't exist.



//  1) If it doesn't exist, return false.
//      Also return false if the available indices are all lower than what we have seen currently.
//  2) If it does exist, set it to the lowest index value that we haven't seen yet.
//  Return true if we reach the end and have each letter in string1 validated.

/** Takes 2 strings and returns true if string1 is a subsequence of string2, false otherwise */
function isSubsequence(string1, string2) {
  let p2 = 0;
  for (const letter of string1) {
    while (string2[p2] !== letter) {
      if (p2 >= string2.length) {
        return false;
      }
      p2++;
    }
  }
  return true;
}

