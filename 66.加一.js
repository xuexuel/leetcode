/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let cnt = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    // 输入的数字
    num = digits[i] + cnt;
    if (num > 9) {
      cnt = Math.floor(num / 10);
      digits[i] = num % 10;
    } else {
      digits[i] = num;
      return digits;
    }
  }
  digits.unshift(cnt);
  return digits;
};
// @lc code=end

