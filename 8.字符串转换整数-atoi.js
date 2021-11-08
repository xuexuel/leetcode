/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const number = parseInt(s, 10);
  const Max = Math.pow(2, 31) - 1;
  const Min = Math.pow(-2, 31);
  if (isNaN(number)) {
    return 0;
  }
  if (number < Min || number > Max) {
  return number < 0 ? Min : Max;
  }
  return number;
};
// @lc code=end

