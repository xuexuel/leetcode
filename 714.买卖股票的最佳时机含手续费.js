/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// var maxProfit = function(prices, fee) {
//   let n = prices.length;
//   let dp = [];
//   dp.push([0,-prices[0]]);
//   for (let i = 1; i < n; i++){
//     dp.push([]);
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee);
//     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
//   }
//   return Math.max(dp[n - 1][0], dp[n - 1][1]);
// };

var maxProfit = function (prices, fee) {
  let n = prices.length;
  let dp_i_0 = 0, dp_i_1 = -Infinity;
  for (let i = 0; i < n; i++) {
    let temp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee);
  }
  return dp_i_0;
};
// @lc code=end

