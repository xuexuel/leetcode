/*
 * @lc app=leetcode.cn id=1760 lang=javascript
 *
 * [1760] 袋子里最少数目的球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  let l = 0, r = 0;
  for (let n of nums) {
    r = Math.max(n, r);
  }
  while (l + 1 < r) {
    let mid = Math.floor(l + (r - l) / 2), tmp = 0;
    for (let n of nums) {
      tmp += Math.floor((n - 1) / mid);
    }
    if (tmp <= maxOperations) {
      r = mid;
    } else {
      l = mid;
    }
  }
  return r;
};
// @lc code=end

