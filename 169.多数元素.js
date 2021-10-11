/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let ind = Math.floor((nums.length - 1) / 2);
  return arr[ind];
};
// @lc code=end

