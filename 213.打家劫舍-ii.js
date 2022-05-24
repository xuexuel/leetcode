/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length;
  if (n == 1) return nums[0];
  let dp = [];
  dp.push([0, nums[0]]);
  for (let i = 1; i < n; i++){
    dp.push([]);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }
  let ans1 = dp[n-1][0];
  dp[0][0] = 0;
  dp[0][1] = 0;
  for (let i = 1; i < n; i++){
    dp.push([]);
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }
  let ans2 = (dp[n - 1][0], dp[n - 1][1]);
  return Math.max(ans1, ans2);
};
// @lc code=end

