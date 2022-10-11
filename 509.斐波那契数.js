/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// *递推优化，空间复杂度O(1)
var fib = function (n) {
  if (n == 0 || n == 1) return n;
  let dp_i_1 = 1, dp_i_2 = 0;
  for (let i = 2; i <= n; i++) {
    let dp_i = dp_i_1 + dp_i_2;
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i_1;
};

// *递推   85.6%
// var fib = function (n) {
//   let cache = [];
//   for (let i = 0; i <= n; i++) {
//     if (i === 1 || i === 0) cache[i] = i;
//     else cache[i] = cache[i - 1] + cache[i - 2];
//   }
//   return cache[n];
// };

// *双指针  81%
// var fib = function (n) {
//   if (n < 2) return n;
//   let p = 0, q = 0, res = 1;
//   for (let i = 2; i <= n; i++) {
//     p = q;
//     q = res;
//     res = p + q;
//   }
//   return res;
// };

// *DP Table
// var fib = function (n) {
//   if (n == 0) return n;
//   if (n == 1 || n == 2) return 1;
//   let dp = new Array(n + 1).fill(0);
//   dp[1] = dp[2] = 1;
//   for (let i = 3; i <= n; i++){
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// };

// *备忘录
// var fib = function (n) {
//   if (n == 0) return n;
//   let memo = new Array(n + 1).fill(0);
//   const helper = (memo, n) => {
//     if (n == 1 || n == 0) return n;
//     if (memo[n] != 0) return memo[n];
//     memo[n] = helper(memo, n - 1) + helper(memo,n - 2);
//     return memo[n];
//   }
//   return helper(memo,n);
// };

// *递归  41%
// var fib = function (n) {
//   if (n === 1 || n === 0) return n;
//   return fib(n - 1) + fib(n - 2);
// };
// @lc code=end

