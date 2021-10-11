/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}--
 */
// var maximumScore = function (a, b, c) {
//   if (a > b) [a, b] = [b, a];
//   if (a > c) [a, c] = [c, a];
//   if (b > c) [b, c] = [c, b];
//   let ans = 0;
//   let cnt1 = Math.min(c - b, a);
//   a -= cnt1;
//   c -= cnt1;
//   ans += cnt1;
//   if (a != 0) {
//     if (a % 2 == 1) a -= 1;
//     b -= a / 2 | 0;
//     c -= a / 2 | 0;
//     ans += a;
//   }
//   ans += b;
//   return ans;
// };
var maximumScore = function (a, b, c) {

}
// @lc code=end

