/*
 * @lc app=leetcode.cn id=650 lang=javascript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
  const dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; ++i) {
    dp[i] = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j * j <= i; ++j) {
      if (i % j === 0) {
        dp[i] = Math.min(dp[i], Math.floor(dp[j] + i / j));
        dp[i] = Math.min(dp[i], Math.floor(dp[i / j] + j));
      }
    }
  }
  return dp[n];
};
// @lc code=end

