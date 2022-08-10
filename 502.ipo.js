/*
 * @lc app=leetcode.cn id=502 lang=javascript
 *
 * [502] IPO
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  var maxP, index;
  for (var i = 0; i < k; i++) {
    maxP = 0;
    for (var j = 0; j < profits.length; j++) {
      if (w >= capital[j]) {
        if (profits[j] > maxP) {
          maxP = profits[j];
          index = j;
        }
      }
    }
    w += maxP;
    profits.splice(index, 1);
    capital.splice(index, 1);
  }
  return w;
};
// @lc code=end

