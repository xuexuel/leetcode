/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
// function getResult(root, k, arr) {
//   if (root === null) return;
//   if (k === arr.length) arr.push([]);
//   arr[k].push(root.val);
//   getResult(root.left, k + 1, arr);
//   getResult(root.right, k + 1, arr);
// }
// var zigzagLevelOrder = function (root) {
//   let arr = [];
//   getResult(arr, 0, root);
//   for (let i = 1; i < arr.length; i += 2) {
//     for (let j = 0, k = arr[i].length - 1; j < k; j++, k--) {
//       [arr[i][j], arr[i][k]] = [arr[i][k], arr[i][j]];
//     }
//   }
//   return arr;
// };
var zigzagLevelOrder = function (root) {

};
// @lc code=end

