/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let res = [];
  for (const item of nums1) {
    let temp = nums2.indexOf(item);
    if (temp !== -1) {
      res.push(item);
      nums2.splice(temp, 1);
    }
  }
  return res;
};
// @lc code=end

