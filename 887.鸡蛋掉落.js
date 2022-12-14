/*
 * @lc app=leetcode.cn id=887 lang=javascript
 *
 * [887] 鸡蛋掉落
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */

// 递归，数组超限
// var superEggDrop = function (k, n) {
//   let memo = {};
//   const dp = (k,n) => {
//     if (k == 1) return n;
//     if (n == 0) return 0;
//     if (memo[k+''+n]) return memo[k+''+n];
//     let res = Infinity;
//     for (let i = 1; i <= n; i++){
//       let temp = Math.max(dp(k, n - i), dp(k - 1, i - 1)) + 1
//       res = Math.min(res,temp);
//     }
//     memo[k+''+n] = res;
//     return res;
//   }
//   return dp(k, n);
// };

// 二分
// var superEggDrop = function (k, n) {
//   let memo = {};
//   let dp = (k,n) => {
//     if (k == 1) return n;
//     if (n == 0) return 0;
//     if (memo[k + '' + n]) return memo[k + '' + n];
//     let res = Infinity;
//     let lo = 1, hi = n;
//     while (lo <= hi) {
//       let mid = (lo + hi) >> 1;
//       let broken = dp(k - 1, mid - 1);
//       let not_broken = dp(k, n - mid);
//       if (broken > not_broken) {
//         hi = mid - 1;
//         res = Math.min(res, broken + 1);
//       } else {
//         lo = mid + 1;
//         res = Math.min(res, not_broken + 1);
//       }
//     }
//     memo[k + '' + n] = res;
//     return res;
//   }
//   return dp(k, n);
// };

// dp二维数组
var superEggDrop = function (k, n) {
  // 不选择dp[K][M]的原因是dp[M][K]可以简化操作
  const dp = Array(n + 1)
    .fill(0)
    .map((_) => Array(k + 1).fill(0));
  let m = 0;
  while (dp[m][k] < n) {
    m++;
    for (let l = 1; l <= k; ++l) {
      dp[m][l] = dp[m - 1][l - 1] + dp[m - 1][l] +1;
    }
  }
  return m;
};

// @lc code=end

