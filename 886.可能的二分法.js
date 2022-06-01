/*
 * @lc app=leetcode.cn id=886 lang=javascript
 *
 * [886] 可能的二分法
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  let graph = [...Array(n + 1)].map(() => Array()), // 动态创建二维数组
    colors = Array(n + 1).fill(-1)
  // build the undirected graph
  for (const d of dislikes) {
    graph[d[0]].push(d[1])
    graph[d[1]].push(d[0])
  }
  const dfs = (cur, color = 0) => {
    colors[cur] = color
    for (const nxt of graph[cur]) {
      if (colors[nxt] !== -1 && colors[nxt] === color) return false // conflict
      if (colors[nxt] === -1 && !dfs(nxt, color ^ 1)) return false;
    }
    return true
  };
  for (let i = 0; i < n; ++i)
    if (colors[i] === -1 && !dfs(i, 0)) return false
  return true
};
// @lc code=end

