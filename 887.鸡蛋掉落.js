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
var superEggDrop = function (k, n) {
  // 不选择dp[K][M]的原因是dp[M][K]可以简化操作
  const dp = Array(n + 1)
    .fill(0)
    .map((_) => Array(k + 1).fill(0));

  let m = 0;
  while (dp[m][k] < n) {
    m++;
    for (let l = 1; l <= k; ++l) dp[m][l] = dp[m - 1][l - 1] + 1 + dp[m - 1][l];
  }
  return m;
};
// @lc code=end

