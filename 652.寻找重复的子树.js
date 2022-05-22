/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  const memo = new Map();
  const res = [];
  const traverse = (node) => {
    if (!node) {
      return "#";
    }
    const key = node.val + "," + traverse(node.left) + traverse(node.right);
    let freq = memo.get(key) || 0;
    if (freq == 1) {
      res.unshift(node);
    }
    memo.set(key, freq + 1);
    return key;
  };
  traverse(root);
  return res;
};
// @lc code=end

