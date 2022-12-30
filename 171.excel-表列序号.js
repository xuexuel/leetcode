/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let num = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let temp = columnTitle[i].charCodeAt() - 'A'.charCodeAt() + 1;
    num = temp + num * 26;
  }
  return num;
};
// @lc code=end

