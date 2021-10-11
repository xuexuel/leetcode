/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
// var widthOfBinaryTree = function (root) {
//   if (!root) return 0;
//   let max = 1n, arr = [[0n, root]];
//   while (arr.length) {
//     let width = arr[arr.length - 1][0] - arr[0][0] + 1n;
//     if (width > max) max = width;
//     let temp = [];
//     for (let [i, q] of arr) {
//       q.left && temp.push([i * 2n, q.left]);
//       q.right && temp.push([i * 2n + 1n, q.right]);
//     }
//     arr = temp;
//   }
//   return Number(max);
// };
var widthOfBinaryTree = function (root) {

}
// @lc code=end

