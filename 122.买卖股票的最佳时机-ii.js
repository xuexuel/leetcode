/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// *双指针
// var maxProfit = function (prices) {
//   let p = 0, q = 1;
//   let res = 0;
//   while (prices.length > q) {
//     if (prices[p] < prices[q]) {
//       res = res + prices[q] - prices[p];
//     }
//     p = q;
//     q++;
//   }
//   return res;
// };

// *动态规划
let maxProfit = function (prices) {
  let dp_i_0 = 0, dp_i_1 = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    let temp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
  }
  return dp_i_0;
}
// @lc code=end

