/**
 * 
 * Date: 06/06/2026
 * Author: Yatish Dhanani
 * 4. Median of Two Sorted Arrays 
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).

    Example 1:
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Example 2:
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

    Constraints:
    • nums1.length == m
    • nums2.length == n
    • 0 <= m <= 1000
    • 0 <= n <= 1000
    • 1 <= m + n <= 2000
    • -106 <= nums1[i], nums2[i] <= 106
  
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0;
  let j = 0;
  const sortedNums = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      sortedNums.push(nums1[i++]);
    } else {
      sortedNums.push(nums2[j++]);
    }
  }
  for (; i < nums1.length; i++) {
    sortedNums.push(nums1[i]);
  }
  for (; j < nums2.length; j++) {
    sortedNums.push(nums2[j]);
  }

  if (sortedNums.length % 2) {
    return sortedNums[Math.floor(sortedNums.length / 2)];
  } else {
    const mid = sortedNums.length / 2;
    return (sortedNums[mid - 1] + sortedNums[mid]) / 2;
  }
};

console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([], [1])); // 1
console.log(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17])); // 9
