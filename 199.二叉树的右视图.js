/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
// var rightSideView = function (root) {
//   let arr = [], res = [];
//   getRight(root, 0, arr);
//   for (let i = 0; i < arr.length; i++) {
//     res.push(arr[i][arr[i].length - 1]);
//   }
//   return res;
// };
// function getRight(root, k, arr) {
//   if (root === null) return;
//   if (k === arr.length) arr.push([]);
//   arr[k].push(root.val);
//   getRight(root.left, k + 1, arr);
//   getRight(root.right, k + 1, arr);
// }
var rightSideView = function (root) {

}
// @lc code=end

