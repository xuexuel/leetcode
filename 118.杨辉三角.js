/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      if (row.length === 0) {
        row.push(1);
      } else {
        row.push(res[i - 1][j - 1] + res[i - 1][j]);
      }
    }
    row.push(1);
    res.push(row);
  }
  return res;
};
// @lc code=end

