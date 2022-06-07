/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const helper = (node) => {
    if (!node) {
      return null
    }
    if (map.has(node)) {
      return map.get(node)
    }
    const { val, neighbors } = node
    const root = new Node(val)
    map.set(node, root)
    for (let i = 0; i < neighbors.length; i++) {
      root.neighbors[i] = helper(neighbors[i])
    }
    return root
  }
  const map = new Map()
  return helper(node)
};
// @lc code=end

