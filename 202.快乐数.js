/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// var isHappy = function (n) {
//   let p = n, q = n;
//   do {
//     p = getNum(p);
//     q = getNum(getNum(q));
//   } while (p !== q && p !== 1)
//   return p === 1;
// };

// function getNum(n) {
//   let sum = 0;
//   while (n) {
//     sum += (n % 10) * (n % 10);
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

// var isHappy = function (n) {
//   let p = n, q = n;
//   while (p && q) {
//     p = getNum(p);
//     q = getNum(getNum(q));
//     if (q === 1) return true;
//     if (p === q) return false;
//   }
// }



var isHappy = function (n) {

}

// @lc code=end

