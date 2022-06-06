/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let m = grid.length, n = grid[0].length;
  let num = 0;
  let dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (grid[i][j] == 0) return;
    grid[i][j] = 0;
    num += 1;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        dfs(i, j);
        res = Math.max(num, res);
        num = 0;
      }
    }
  }
  return res;
};
// @lc code=end

