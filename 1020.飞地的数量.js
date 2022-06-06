/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let n = grid.length, m = grid[0].length;
  let dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m) return;
    if (grid[i][j] == 0) return;
    grid[i][j] = 0;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);

  }
  for (let j = 0; j < m; j++) {
    dfs(0, j);
    dfs(n - 1, j);
  }
  for (let i = 0; i < n; i++) {
    dfs(i, 0);
    dfs(i, m - 1);
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        res++;
      }
    }
  }
  return res;
};
// @lc code=end

