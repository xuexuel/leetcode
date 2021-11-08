/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let ret = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
    ret |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  return ret >>> 0;
};
// @lc code=end

