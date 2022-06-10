/*
 * @lc app=leetcode.cn id=931 lang=javascript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  let n = matrix.length;
  let res = Infinity;
  let memo = new Array(n);
  for (let i = 0; i < n; i++){
    memo[i] = new Array(n).fill(66666);
  }
  const dp = (i, j) => {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix.length) return 99999;
    if (i == 0) return matrix[0][j];
    if (memo[i][j] != 66666) return memo[i][j];
    memo[i][j] = matrix[i][j] +
      Math.min(dp(i - 1, j), Math.min(dp(i - 1, j - 1), dp(i - 1, j + 1)));
    return memo[i][j];
  }
  for (let i = 0; i < n; i++){
    res = Math.min(res, dp(n - 1, i));
  }
  return res;
};

// @lc code=end

