/*
 * @lc app=leetcode.cn id=754 lang=javascript
 *
 * [754] 到达终点数字
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  let sum = 0;
  let n = 0;
  target = Math.abs(target);
  while (sum < target || (target + sum) % 2 !== 0) {
    n++;
    sum += n;
  }
  return n
};
// @lc code=end

