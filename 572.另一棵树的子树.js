/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// var isSubtree = function (root, subRoot) {
//   if (root === null && subRoot === null) return true;
//   if (subRoot === null) return true;
//   if (root === null) return false;
//   if (root.val === subRoot.val && isMatch(root, subRoot)) return true;
//   return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
// };
// function isMatch(root, subRoot) {
//   if (root === null && subRoot === null) return true;
//   if (subRoot === null) return false;
//   if (root === null) return false;
//   if (root.val !== subRoot.val) return false;
//   return isMatch(root.left, subRoot.left) && isMatch(root.right, subRoot.right);
// }
var isSubtree = function (root, subRoot) {

}
// @lc code=end

