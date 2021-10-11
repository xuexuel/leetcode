/*
 * @lc app=leetcode.cn id=1920 lang=javascript
 *
 * [1920] 基于排列构建数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[nums[i]]);
  }
  return arr;
};
// @lc code=end

