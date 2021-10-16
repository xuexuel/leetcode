/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  if (!root) return [];
  let targetNode = null;
  let res = [];
  let paths = [];
  dfs(root, target);
  getdownDis(targetNode, k);
  while (targetNode.parent && k > 0) {
    targetNode = targetNode.parent;
    getdownDis(targetNode, --k);
  }
  function dfs(root, target) {
    if (!root || targetNode) return;
    if (root.val === target.val) {
      targetNode = root;
    }
    if (root.left) {
      root.left.parent = root;
      dfs(root.left, target);
    }
    if (root.right) {
      root.right.parent = root;
      dfs(root.right, target);
    }
  }
  function getdownDis(node, k) {
    if (node === null || paths.indexOf(node) !== -1) return;
    paths.push(node);
    if (k > 0) {
      getdownDis(node.left, k - 1);
      getdownDis(node.right, k - 1);
    }
    else if (k === 0) {
      res.push(node.val);
    }
  }
  return res;
};
// @lc code=end

