/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
  if (x + y < z) return false;
  if (z === 0) return true;
  if (x === 0) return y === z;
  if (y === 0) return x === z;
  function GCD(a, b) {
    let min = Math.min(a, b);
    while (min) {
      if (a % min === 0 && b % min === 0) return min;
      min--;
    }
    return 1;
  }
  return z % GCD(x, y) === 0;
};
// @lc code=end

