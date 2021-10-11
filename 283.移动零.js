/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0, top = nums.length;
  while (i < top) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      top--;
    } else {
      i++;
    }
  }
};
// @lc code=end

