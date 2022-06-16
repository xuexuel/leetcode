/*
 * @lc app=leetcode.cn id=1310 lang=javascript
 *
 * [1310] 子数组异或查询
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  let n = arr.length;
  for (let i = 1; i < n; i++) arr[i] ^= arr[i - 1];
  let ret = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    ret[i] = arr[queries[i][1]] ^ (queries[i][0] ? arr[queries[i][0] - 1] : 0);
  }
  return ret;
};
// @lc code=end

