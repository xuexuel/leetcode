/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// *双指针
// var maxProfit = function (prices) {
//   let p = 0, q = 1;
//   let pro = 0;
//   while (prices.length > q) {
//     if (prices[p] >= prices[q]) {
//       p = q;
//     } else {
//       let temp = prices[q] - prices[p];
//       pro = Math.max(pro, temp);
//     }
//     q++;
//   }
//   return pro;
// };

// 动态规划
let maxProfit = function (prices) {
  let dp_i_0 = 0, dp_i_1 = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }
  return dp_i_0;
}
// @lc code=end

