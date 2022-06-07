/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const nodes = [];
  const dfs = (node, row, col) => {
    if (node === null) {
      return;
    }
    nodes.push([col, row, node.val]);
    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1);
  }
  dfs(root, 0, 0);
  
  nodes.sort((tuple1, tuple2) => {
    if (tuple1[0] !== tuple2[0]) {
      return tuple1[0] - tuple2[0];
    } else if (tuple1[1] !== tuple2[1]) {
      return tuple1[1] - tuple2[1];
    } else {
      return tuple1[2] - tuple2[2];
    }
  });

  const ans = [];
  let lastcol = -Number.MAX_VALUE;
  for (const tuple of nodes) {
    let col = tuple[0], row = tuple[1], value = tuple[2];
    if (col !== lastcol) {
      lastcol = col;
      ans.push([]);
    }
    ans[ans.length - 1].push(value);
  }
  return ans;
};


// @lc code=end

