/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  x ^= y;
  let cnt = 0;
  while (x) {
    x &= (x - 1);
    cnt += 1;
  }
  return cnt;
};
// @lc code=end

