/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let res = [];
  while (columnNumber) {
    let temp = (columnNumber - 1) % 26 + 1;
    res.push(String.fromCharCode(temp - 1 + 'A'.charCodeAt()));
    columnNumber = Math.floor((columnNumber - temp) / 26);
  }
  return res.reverse().join('');
};
// @lc code=end

