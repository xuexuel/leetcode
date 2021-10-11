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
var maxProfit = function (prices) {
  let p = 0, q = 1;
  let res = 0;
  while (prices.length > q) {
    if (prices[p] < prices[q]) {
      res = res + prices[q] - prices[p];
    }
    p = q;
    q++;
  }
  return res;
};
// @lc code=end

