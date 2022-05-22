/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let dp = [];
  for (let i = 0; i < nums.length; i++) {
    dp.push([]);
    dp.push([]);    
  }
  dp[0][0] = 0, dp[0][1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }
  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1]);
};
// @lc code=end

