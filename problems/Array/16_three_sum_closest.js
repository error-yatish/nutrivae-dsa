/**
 * 
 * Date: 08/06/2026
 * Author: Yatish Dhanani
 * 16. Three Sum Closest 
 *
 * Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.

    Example 1:
    Input: nums = [-1,2,1,-4], target = 1
    Output: 2
    Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

    Example 2:
    Input: nums = [0,0,0], target = 1
    Output: 0
    Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0). 

    Constraints:
    • 3 <= nums.length <= 500
    • -1000 <= nums[i] <= 1000
    • -104 <= target <= 104   
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closestValue = nums[0] + nums[1] + nums[2];

  for (i = 0; i < nums.length - 2; i++) {
    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (Math.abs(target - sum) < Math.abs(target - closestValue)) {
        closestValue = sum;
      }

      if (sum === target) return target;
      else if (sum < target) j++;
      else k--;
    }
  }
  return closestValue;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 0, 0], 1)); // 0
console.log(threeSumClosest([4, 0, 5, -5, 3, 3, 0, -4, -5], -2)); // -2
console.log(threeSumClosest([0, 1, 2], 0)); // 3
console.log(threeSumClosest([-1000, -5, -5, -5, -5, -5, -5, -1, -1, -1], -14)); // -15
console.log(threeSumClosest([-4, 2, 2, 3, 3, 3], 0)); // 0
