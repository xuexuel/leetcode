/*
 * @lc app=leetcode.cn id=797 lang=javascript
 *
 * [797] 所有可能的路径
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const stack = [], ans = [];
  const dfs = (graph, x, n) => {
    if (x === n) {
      ans.push(stack.slice());
      return;
    }
    for (const y of graph[x]) {
      stack.push(y);
      dfs(graph, y, n);
      stack.pop();
    }
  }
  stack.push(0);
  dfs(graph, 0, graph.length - 1);
  return ans;
};
// @lc code=end

