/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  if (n === 1 || edges.length === 0) return [0];
  let root, len = edges.length, inDegs = new Array(n);
  do {
    edges.length = len;
    inDegs.fill(0);
    for (let edge of edges) {
      inDegs[edge[0]]++;
      inDegs[edge[1]]++;
    }
    len = 0;
    for (let edge of edges) {
      if (inDegs[edge[0]] > 1 && inDegs[edge[1]] > 1) edges[len++] = edge;
      else if (inDegs[edge[0]] > 1) root = edge[0];
      else if (inDegs[edge[1]] > 1) root = edge[1];
    }
  }
  while (len) if (edges.length === 1) return edges[0]; 
  return [root]; 
};
// @lc code=end

