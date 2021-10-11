/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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

// *递归方法
// function getResult(root, k, arr) {
//   if (root === null) return;
//   if (k === arr.length) arr.push([]);
//   arr[k].push(root.val);
//   getResult(root.left, k + 1, arr);
//   getResult(root.right, k + 1, arr);
// }
// var levelOrder = function (root) {
//   let arr = [];
//   getResult(root, 0, arr);
//   return arr;
// };

// *出入队列方法
// var levelOrder = function (root) {
//   let arr = [];
//   let stack = [];
//   stack.push(root);
//   stack.push('*');
//   let k = 0;
//   while (stack.length > 1) {
//     let temp = stack.shift();
//     if (temp === null) continue;
//     if (k === arr.length) arr.push([]);
//     if (temp === '*') {
//       k++;
//       stack.push('*');
//     } else {
//       arr[k].push(temp.val);
//       stack.push(temp.left);
//       stack.push(temp.right);
//     }
//   }
//   return arr;
// };
var levelOrder = function (root) {

}
// @lc code=end

