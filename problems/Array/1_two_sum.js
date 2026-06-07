/**
 * 
 * Date: 04/06/2026
 * Author: Yatish Dhanani
 * Problem: 1. Two Sum
 * 
 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
- 2 <= nums.length <= 10⁴
- -10⁹ <= nums[i] <= 10⁹
- -10⁹ <= target <= 10⁹
- Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n²) time complexity?
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums = [], target = 0) {
  // BruteForce Approch; Time Complexity: O(n²); Space: O(1)
  //
  //   for (i = 0; i < nums.length; i++) {
  //     for (j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  //   return [];

  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const restTarget = target - nums[i];
    if (restTarget in numMap) {
      return [numMap[restTarget], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 4, 6, 8, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
