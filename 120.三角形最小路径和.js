/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length;
  let dp = [];
  for (let i = 0; i < 2; i++) {
    let arr = new Array(n).fill(0);
    dp.push(arr);
  }
  for (let i = 0; i < n; i++) {
    dp[(n - 1) % 2][i] = triangle[n - 1][i];
  }
  for (let i = n - 2; i >= 0; --i) {
    let ind = i % 2;
    let next_ind = ind == 0 ? 1 : 0;
    for (let j = 0; j <= i; j++) {
      dp[ind][j] = Math.min(dp[next_ind][j], dp[next_ind][j + 1]) + triangle[i][j];
    }
  }
  return dp[0][0];
};
// @lc code=end

