/*
 * @lc app=leetcode.cn id=1905 lang=javascript
 *
 * [1905] 统计子岛屿
 */

// @lc code=start
/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function(grid1, grid2) {
  let m = grid1.length, n = grid1[0].length;
  let dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (grid2[i][j] == 0) return;
    grid2[i][j] = 0;
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j-1);
    dfs(i, j+1);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid1[i][j] == 0 && grid2[i][j] == 1) {
        dfs(i, j);
      }
    }
  }
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] == 1) {
        res++;
        dfs(i, j);
      }
    }
  }
  return res;
};
// @lc code=end

