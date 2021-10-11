/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let head = 0, tail = x, mid;
  for (let i = 0; i < 100; i++){
    mid = (tail + head)/2.0;
    if (mid * mid <= x) head = mid;
    else tail = mid;
  }
  return Math.floor(head);
};
// @lc code=end

