/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
// *动态规划
let maxProfit = function (k, prices) {
  let max_k = k, n = prices.length;
  if (n == 0) return 0;
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
    dp[i][0][1] = -Infinity;
    dp[i][0][0] = 0;
  }
  for (let i = 0; i < n; i++) {
    for (let m = max_k; m >= 1; m--) {
      if (i - 1 == -1) {
        dp[i][m][0] = 0;
        dp[i][m][1] = -prices[i];
        continue;
      }
      dp[i][m][0] = Math.max(dp[i - 1][m][0], dp[i - 1][m][1] +
        prices[i]);
      dp[i][m][1] = Math.max(dp[i - 1][m][1], dp[i - 1][m - 1][0] -
        prices[i]);
    }
  }
  return dp[n - 1][max_k][0];
}
// @lc code=end

