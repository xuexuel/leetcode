/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// *优化空间
 var climbStairs = function (n) {
   let t1 = 1, t2 = 1;
  for (let i = 2; i <= n; i++) {
    let t = t1 + t2
    t1 = t2
    t2 = t
  }
  return t2;
};

// var climbStairs = function (n) {
//   let f = [];
//   f[0] = f[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     f[i] = f[i - 1] + f[i - 2];
//   }
//   return f[n];
// };
// @lc code=end

