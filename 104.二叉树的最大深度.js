/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */

// *迭代
// var maxDepth = function (root) {
//   if (root === null) return 0;
//   let queue = [];
//   queue.push(root);
//   let ans = 0;
//   while (!queue.length) {
//     let num = queue.length;
//     while (num > 0) {

//     }
//   }
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };

// *递归
// var maxDepth = function (root) {
//   if (root === null) return 0;
//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };
var maxDepth = function (root) {

}
// @lc code=end

