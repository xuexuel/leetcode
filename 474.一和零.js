/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  let dp = new Array(m + 1);
  for (let i = 0; i < dp.length; i++) {
    let arr = new Array(n + 1).fill(0);
    dp[i] = arr;
  }
  for (const x of strs) {
    let cnt0 = 0, cnt1 = 0;
    for (const y of x) {
      if (y == '0') cnt0 += 1;
      else cnt1 += 1;
    }
    for (let i = m; i >= cnt0; --i){
      for (let j = n; j >= cnt1; --j){
        dp[i][j] = Math.max(dp[i][j], dp[i - cnt0][j - cnt1] + 1);
      }
    }
  }
  return dp[m][n];
};
// @lc code=end

