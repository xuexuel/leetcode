/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 == '0' || num2 == '0') return '0';
  let len1 = num1.length;
  let len2 = num2.length;
  let arr = new Array(len1 + len2).fill(0);
  let i = len1, j = len2;
  while (i) {
    i--;
    while (j) {
      j--;
      let sum = num1[i] * num2[j] + arr[i + j + 1];
      arr[i + j] += 0 | sum / 10;
      arr[i + j + 1] = sum % 10;
    }
    j = len2;
  }
  while (arr[0] == 0) {
    arr.shift();
  }
  return arr.join('');
};
// @lc code=end

