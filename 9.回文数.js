/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

//* 转换成字符串判断 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let arr = x.toString().split('');
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }
  return true;
};

// *取余数计算
// var isPalindrome = function (x) {
//   if (x < 0) return false;
//   let temp = x;
//   let res = 0;
//   while (x) {
//     res = res * 10 + x % 10;
//     x = Math.floor(x / 10);
//   }
//   return res === temp;
// };
// @lc code=end

