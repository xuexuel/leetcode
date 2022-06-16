/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
let maxProfit = function (prices) {
  let max_k = 2, n = prices.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(max_k + 1);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < max_k + 1; j++) {
      dp[i][j] = new Array(2).fill(0);
    }
  }
  for (let i = 0; i < n; i++) {
    for (let k = max_k; k >= 1; k--) {
      if (i - 1 == -1) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] +
        prices[i]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] -
        prices[i]);
    }
  }
  return dp[n - 1][max_k][0];
}
// @lc code=end

