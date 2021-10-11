/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//   let cnt = nums1.length + nums2.length;
//   let arr = [];
//   let i = 0, j = 0;
//   while (arr.length < Math.floor(cnt / 2) + 1) {
//     if (nums1[i] < nums2[j] || j == nums2.length) {
//       arr.push(nums1[i]);
//       i += 1;
//     } else if (nums1[i] >= nums2[j] || i == nums1.length) {
//       arr.push(nums2[j]);
//       j += 1;
//     }
//   }
//   if (cnt % 2 == 0) {
//     return (arr.pop() + arr.pop()) / 2;
//   } else {
//     return arr.pop();
//   }
// };

// 二分查找
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }
  let m = nums1.length; let n = nums2.length;
  let left = 0;
  let right = m;
  let median1 = 0;
  let median2 = 0;
  while (left <= right) {
    const i = left + Math.floor((right - left) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;
    const maxLeft1 = i === 0 ? -Infinity : nums1[i - 1];
    const minRight1 = i === m ? Infinity : nums1[i];
    const maxLeft2 = j === 0 ? -Infinity : nums2[j - 1];
    const minRight2 = j === n ? Infinity : nums2[j];
    if (maxLeft1 <= minRight2) {
      median1 = Math.max(maxLeft1, maxLeft2);
      median2 = Math.min(minRight1, minRight2);
      left = i + 1;
    } else {
      right = i - 1;
    }
  }
  return (m + n) % 2 == 0 ? (median1 + median2) / 2 : median1;
}
 // @lc code=end

