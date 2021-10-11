/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let m = n;
  let res = 1;
  if (x === 0) return 0;
  if (n < 0) {
    m = -n;
  }
  while (m) {
    res = res * x;
    m--;
  }
  if (n < 0) {
    res = 1 / res;
  }
  return res;
};
// @lc code=end

