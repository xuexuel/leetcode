/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let p = 0, q = 0;
  do {
    p = nums[p];
    q = nums[nums[q]];
  } while (p != q);
  p = 0;
  while (p != q) {
    p = nums[p];
    q = nums[q];
  }
  return p;
};
// @lc code=end

