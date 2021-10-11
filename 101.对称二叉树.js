/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// var isSymmetric = function (root) {
//   let arr = [];
//   getTree(root, 0, arr);
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0, k = arr[i].length - 1; j < k; j++, k--) {
//       if (arr[i][j] !== arr[i][k]) return false;
//     }
//   }
//   return true;
// };
// function getTree(root, k, arr) {
//   if (arr.length === k) arr.push([]);
//   arr[k].push(root ? root.val : root);
//   if (root === null) return;
//   getTree(root.left, k + 1, arr);
//   getTree(root.right, k + 1, arr);
// }
var isSymmetric = function (root) {

}
// @lc code=end

