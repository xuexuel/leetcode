/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  let n = mat.length;
  let m = mat[0].length;
  if (!n || !m) return null;
  let ans = new Array(n);
  for (let i = 0; i < n; i++) ans[i] = new Array(m).fill(-1);
  let queue = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (mat[i][j] === 0) {
        ans[i][j] = 0;
        queue.push([i, j]);
      }
    }
  }
  let dist = 0;
  while (queue.length) {
    let len = queue.length;
    dist++;
    for (let i = 0; i < len; i++) {
      let top = queue.shift();
      if (top[0] + 1 < n && ans[top[0] + 1][top[1]] === -1) {
        queue.push([top[0] + 1, top[1]]);
        ans[top[0] + 1][top[1]] = dist;
      }
      if (top[0] - 1 >= 0 && ans[top[0] - 1][top[1]] === -1) {
        queue.push([top[0] - 1, top[1]]);
        ans[top[0] - 1][top[1]] = dist;
      }
      if (top[1] + 1 < m && ans[top[0]][top[1] + 1] === -1) {
        queue.push([top[0], top[1] + 1]);
        ans[top[0]][top[1] + 1] = dist;
      } if (top[1] - 1 >= 0 && ans[top[0]][top[1] - 1] === -1) {
        queue.push([top[0], top[1] - 1]);
        ans[top[0]][top[1] - 1] = dist;
      }
    }
  }
  return ans;
};
// @lc code=end

