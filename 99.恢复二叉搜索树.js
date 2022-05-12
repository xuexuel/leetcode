/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
let pre, p, q;
var recoverTree = function(root) {
  pre = p = q = null;
  inorder(root);
  [p.val, q.val] = [q.val, p.val];
  return root;
};
var inorder = function (root) {
  if (root == null) return;
  inorder(root.left);
  if (pre && root.val < pre.val) {
    if (p == null) p = pre;
    q = root;
  }
  pre = root;
  inorder(root.right);
  return;
}

// @lc code=end

