/*
 * @lc app=leetcode.cn id=1155 lang=javascript
 *
 * [1155] 掷骰子的N种方法
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function (n, k, target) {
  let dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = []
    for (let j = 0; j <= target; j++) {
      dp[i][j] = 0
    }
  }
  for (let i = 1; i <= Math.min(k, target); i++) {
    dp[0][i] = 1;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= target; j++) {
      for (let m = 1; m <= k && m <= j; m++) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - m]) % 1000000007
      }
    }
  }
  return dp[n - 1][target]
};
// @lc code=end

