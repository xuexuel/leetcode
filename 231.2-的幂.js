/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let q = -1;
  while (true) {
    q++;
    console.log(q, Math.pow(2, q))
    if (Math.pow(2, q) === n) return true;
    else if (Math.pow(2, q) < n) continue;
    else if (Math.pow(2, q) > n) return false;
  }
};
// @lc code=end

