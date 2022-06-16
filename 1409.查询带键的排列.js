/*
 * @lc app=leetcode.cn id=1409 lang=javascript
 *
 * [1409] 查询带键的排列
 */

// @lc code=start
/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let arr = []
  for (let i = 0; i < m; i++) {
    arr[i] = i + 1;
  }
  let ret = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    var idx = arr.indexOf(query);
    arr.unshift(...arr.splice(idx, 1));
    ret.push(idx);
  }

  return ret;
};
// @lc code=end

