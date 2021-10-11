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
var maxProfit = function (prices) {
  let p = 0, q = 1;
  let pro = 0;
  while (prices.length > q) {
    if (prices[p] >= prices[q]) {
      p = q;
    } else {
      let temp = prices[q] - prices[p];
      pro = Math.max(pro, temp);
    }
    q++;
  }
  return pro;
};
// @lc code=end

