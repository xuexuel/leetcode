/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */

// *递归进阶版
// var invertTree = function (root) {
//   if (root === null) return root;
//   [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
//   return root;
// };

// *递归基础版
// var invertTree = function (root) {
//   if (root === null) return root;
//   let temp = root.left;
//   root.left = root.right;
//   root.right = temp;
//   invertTree(root.left);
//   invertTree(root.right);
//   return root;
// };

var invertTree = function (root) {

}
// @lc code=end

