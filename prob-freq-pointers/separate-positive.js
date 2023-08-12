"use strict";
// add whatever parameters you deem necessary & write docstring

// This should take an array of non-zero numbers. Separate the positive numbers to the left and the negative numbers to the right.
// The positive numbers and negative numbers need not be in sorted order.

// Intialize two pointers
//  1) first pointer (swap position) -> loop through array until reaching first negative value. Set that index as pointer.
//  2) second pointer -> first pointer + 1
// Now, loop second pointer to the end index of the array. when first pointer is negative and 2nd positive, swap them.
//    1) Increment swap pointer until the corresponding value is negative.
//    2) After this, add 1 to the second pointer until we either reach a positive value or the end of the array.
// Returns swapped array


/** Takes an array of numbers, returns the same array mutated to have all positive numbers on the left and all negative numbers on the right. */
function separatePositive(nums) {
  let p1 = 0; // consider start/end or left/right
  let p2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      p1 = i;
      break;
    }
  }
  p2 = p1 + 1;

  for (let j = p2; j < nums.length; j++) {
    if (nums[j] > 0) {
      // swap
      let storeNum1 = nums[p1];
      let storeNum2 = nums[j];
      nums[p1] = storeNum2;
      nums[j] = storeNum1;

      p1 ++;
      while (nums[p1] > 0) {
        p1 ++;
        if (p1 < nums.length) {
          break;
        }
      }
    }
  }

  return nums;
}
