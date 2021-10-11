/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let arr = [];
  for (const item of intervals) {
    arr.push([item[0], 1]);
    arr.push([item[1], -1]);
  }
  arr.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    else return a[0] - b[0];
  });
  let pre = -1, sum = 0;
  let ret = [];
  for (let i = 0; i < arr.length; i++) {
    if (pre === -1) pre = arr[i][0];
    sum += arr[i][1];
    if (sum == 0) {
      ret.push([pre, arr[i][0]]);
      pre = -1;
    }
  }
  return ret;
};
// @lc code=end

