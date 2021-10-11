/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = [1, 0, 1];
  while (rowIndex) {
    let item = res.shift();
    if (item === 0) {
      rowIndex--;
      res.push(0);
      res.push(1);
    } else {
      res.push(item + res[0]);
    }
  }
  res.pop();
  res.pop();
  return res;
};
// @lc code=end

