/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// function preorder(root, stack) {
//   if (root === null) return;
//   stack.push(root.val);
//   preorder(root.left, stack);
//   preorder(root.right, stack);
// }
// *递归
// var preorderTraversal = function (root) {
//   let stack = [];
//   preorder(root, stack);
//   return stack;
// };

// *迭代
// var preorderTraversal = function (root) {
//   let result = [], stack = [], cur = root;
//   while (cur || stack.length > 0) {
//     while (cur) {
//       result.push(cur.val);
//       stack.push(cur);
//       cur = cur.left;
//     }
//     cur = stack.pop();
//     cur = cur.right;
//   }
//   return result;
// };
var preorderTraversal = function (root) {

}
// @lc code=end

