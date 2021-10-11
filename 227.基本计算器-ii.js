/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// function calcRes(s1, n, s2) {
//   s1 = Number(s1);
//   s2 = Number(s2);
//   let res = 0;
//   switch (n) {
//     case '+': res = s2 + s1;
//       break;
//     case '-': res = s2 - s1;
//       break;
//     case '*': res = s2 * s1;
//       break;
//     case '/': res = Math.floor(s2 / s1);
//       break;
//   }
//   return res;
// }
// var calculate = function (s) {
//   s += '@';
//   let obj = { '@': -1, '+': 1, '-': 1, '*': 2, '/': 2 }
//   let s1 = [], s2 = [], num = '';
//   for (let i = 0; i < s.length; i++) {
//     const item = s[i];
//     if (item === ' ') continue;
//     if (obj[item] === undefined) {
//       num += item;
//       continue;
//     }
//     s1.push(Number(num));
//     num = '';
//     while (s2.length !== 0 && obj[s2[s2.length - 1]] >= obj[item]) {
//       let res = calcRes(s1.pop(), s2.pop(), s1.pop());
//       s1.push(res);
//     }
//     s2.push(item);
//   }
//   return s1.pop();
// };
var calculate = function (s) {

}
// @lc code=end

