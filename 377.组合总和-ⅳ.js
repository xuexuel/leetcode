/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let arr = new Array(target + 1).fill(0);
  arr[0] = 1;
  for (let i = 1; i <= target; i++) {
    for (const x of nums) {
      if (i >= x) {
        arr[i] += arr[i - x];
      }
    }
  }
  return arr[target];
};
// @lc code=end

