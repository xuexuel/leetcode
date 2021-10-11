/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
// var levelOrderBottom = function (root) {
//   let arr = [];
//   getResult(root, 0, arr);
//   for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// };
var levelOrderBottom = function (root) {

}
// @lc code=end

