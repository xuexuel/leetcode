/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */

// var buddyStrings = function (a, b) {
//   if (a.length !== b.length) return false;
//   if (a == b) return has_repeat(a);
//   let i = 0, j;
//   while (a[i] === b[i]) i += 1;
//   if (i === a.length) return false;
//   j = i + 1;
//   while (j < a.length && a[j] === b[j]) j += 1;
//   if (j === a.length) return false;
//   if (a[i] !== b[j] || a[j] !== b[i]) return false;
//   while (j < a.length) {
//     j += 1;
//     if (a[j] !== b[j]) return false;
//   }
//   return true;
// };
// function has_repeat(a) {
//   let arr = new Array(26).fill(0);
//   for (let i = 0; i < a.length; i++) {
//     let cnt = a[i].charCodeAt() - 'a'.charCodeAt();
//     arr[cnt] += 1;
//     if (arr[cnt] == 2) return true;
//   }
//   return false;
// }

var buddyStrings = function (a, b) {

}
// @lc code=end

