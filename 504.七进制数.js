/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  let flag = false;
  if (num < 0) {
    flag = true;
    num = -num;
  }
  let s = '';
  while (num) {
    s += Math.abs(num % 7) + '';
    num = Math.floor(num/7);
  }
  if (flag) s += '-';
  s= s.split('').reverse().join('');
  return s?s:'0';
};
// @lc code=end

