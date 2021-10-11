/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  while (n > 1) {
    if (n % 3 === 0) {
      n = n / 3;
      console.log(n)
    } else {
      return false;
    }
  }
  return n === 1;
};
// @lc code=end

