/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 行
  const row = grid.length;
  // 列
  const col = grid[0].length;
  // 创建dp数组
  const dp = Array.from(new Array(row), () => new Array(col).fill(1));

  // 到达第一个点的路径和肯定为grid[0][0]值本身
  dp[0][0] = grid[0][0];
  // 求第一行每个点的最短路径和
  for (let i = 1; i < col; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1];
  }
  // 求第一列每一行的最短路径和
  for (let j = 1; j < row; j++) {
    dp[j][0] = grid[j][0] + dp[j - 1][0];
  }
  // 从 grid[1][1]开始计算每一点的最短路径和，例如计算grid[1][1]该点的最短路径和，仅需比较 dp[0][1] + grid[1][1] 与 dp[1][0] + grid[1][1]
  // 比较两者大小，谁最小则取谁的值
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j]);
    }
  }
  return dp[row - 1][col - 1];
};
// @lc code=end

