/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let res = [], temp = 0;
  let i = num1.length-1, j = num2.length-1;
  while (i >= 0 || j >= 0) {
    let a = i >=0 ? num1[i--] : 0;
    let b = j >=0 ? num2[j--] : 0;
    let cal = Number(a) + Number(b) + temp;
    temp = Math.floor(cal / 10);
    res.unshift(cal % 10);
  }
  if (temp !== 0) res.unshift(temp);
  return res.join('');
};
// @lc code=end

