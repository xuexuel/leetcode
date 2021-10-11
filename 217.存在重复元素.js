/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let arr = nums.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
};
// @lc code=end

