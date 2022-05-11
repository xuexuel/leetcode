/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] != i + 1) {
      if (nums[i] <= 0 || nums[i] > nums.length) break;
      let ind = nums[i] - 1;
      if (nums[i] == nums[ind]) break;
      [nums[i], nums[ind]] = [nums[ind], nums[i]];
    }
  }
  let ind = 0;
  while (ind < nums.length && nums[ind] == ind + 1) ++ind;
  return ind + 1;
};
// @lc code=end

