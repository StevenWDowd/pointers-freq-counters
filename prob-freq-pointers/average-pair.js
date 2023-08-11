"use strict";

// add whatever parameters you deem necessary & write docstring
/*input: array of numbers nums, target value number
output: boolean
initialize a pointer at each end of the array 0, length -1
average the values at each pointer, check if they match the target
  if they do, return true
if result is too large, move end pointer left
if result is too small, move start pointer right
if left pointer is greater than or equal to right pointer, exit while
loop

at that point, return false
*/
/**
 * Accepts an array of numbers and a target average. Returns true
 * if two elements of the array can average to the target. Returns
 * false otherwise.
 * @param {*} nums An array of numbers
 * @param {*} targetAvg A number value
 * @returns A boolean value
 */
function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;
  while (right > left) {
    const currentAvg = (nums[left] + nums[right]) / 2;
    if (currentAvg === targetAvg) {
      return true;
    }
    if (currentAvg > targetAvg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}


