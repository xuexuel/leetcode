/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 多数元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let a = [0, 0];
  let b = [0, 0];
  // 0位置表示数字，1位置表示数量
  for (const item of nums) {
    if (a[1] && a[0] == item) a[1] += 1;
    else if (b[1] && b[0] == item) b[1] += 1;
    else if (a[1] == 0) a[0] = item, a[1] = 1;
    else if (b[1] == 0) b[0] = item, b[1] = 1;
    else a[1] -= 1, b[1] -= 1;
  }
  a[1] = b[1] = 0;
  for (const item of nums) {
    if (a[0] == item) a[1] += 1;
    else if (b[0] == item) b[1] += 1;
  }
  let ret = [];
  if (a[1] * 3 > nums.length) ret.push(a[0]);
  if (b[1] * 3 > nums.length) ret.push(b[0]);
  return ret;
};
// @lc code=end

