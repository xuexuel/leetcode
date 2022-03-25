/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */

function isValid(root, lower, upper) {
  if (root === null) return true;
  if (root.val <= lower || root.val >= upper) return false;
  return isValid(root.left, lower, root.val) && isValid(root.right, root.val, upper);
}
var isValidBST = function (root) {
  return isValid(root, -Infinity, Infinity);
};
// let pre = null
// var inorder = function (root) {
//   if (root == null) return true;
//   if (!inorder(root.left)) return false;
//   if (pre != null && root.val <= pre.val) {
//     return false;
//   }
//   pre = root;
//   if (!inorder(root.right)) return false;
//   return true;

// }
// var isValidBST = function (root) {
//   return inorder(root);
// }
// @lc code=end

