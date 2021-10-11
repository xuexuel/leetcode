/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let count = 1;
  while (count <= n) {
    n = n - count;
    count++;
  }
  return count - 1;
};
// @lc code=end

