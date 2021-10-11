/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let arr1 = nums1.sort((a, b) => a - b);
  let arr2 = nums2.sort((a, b) => a - b);
  let i = 0, j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      if (res[0] !== arr1[i]) res.unshift(arr1[i]);
      i++;
      j++;
    }
  }
  return res;
};
// @lc code=end

