/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let cnt = 0,ret = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i];
    if (item == 1) {
      cnt++;
    } else {
      ret = Math.max(ret, cnt);
      cnt = 0;
    }
  }
  return Math.max(ret, cnt);
};
// @lc code=end

