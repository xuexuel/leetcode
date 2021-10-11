/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let l = 0,r = 0, mid;
  for (const x of weights) r += x, l = Math.max(l, x);
  while (l < r) {
    mid = (l + r) >> 1;
    if (check(weights, mid) <= days) r = mid;
    else l = mid + 1;
  }
  return l;
};
var check = function (nums, x) {
  let cnt = 1, sum = 0;
  for (const y of nums) {
    if (sum + y > x) {
      cnt += 1;
      sum = y;
    } else {
      sum += y;
    }
  }
  return cnt;
};
// @lc code=end

