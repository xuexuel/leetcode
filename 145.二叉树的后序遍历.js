/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// *双循环，超简单
// var postorderTraversal = function (root) {
//   let stack = [], res = [];
//   while (root !== null || stack.length !== 0) {
//     while (root !== null) {
//       res.unshift(root.val);
//       stack.push(root);
//       root = root.right;
//     }
//     root = stack.pop().left;
//   }
//   return res;
// };
// *船长的方法，单循环
// var postorderTraversal = function (root) {
//   if (!root) return [];
//   let s1 = [], s2 = [], res = [];
//   s1.push(root);
//   s2.push(0);
//   while (s1.length !== 0) {
//     let status = s2.pop();
//     switch (status) {
//       case 0: {
//         s2.push(1);
//         if (s1[s1.length - 1].left !== null) {
//           s1.push(s1[s1.length - 1].left);
//           s2.push(0);
//         }
//       } break;
//       case 1: {
//         s2.push(2);
//         if (s1[s1.length - 1].right !== null) {
//           s1.push(s1[s1.length - 1].right);
//           s2.push(0);
//         }
//       } break;
//       case 2: {
//         res.push(s1[s1.length - 1].val);
//         s1.pop();
//       } break;
//     }
//   }
//   return res;
// };
// *递归方法
// var postorderTraversal = function (root) {
//   let res = [];
//   post(root, res);
//   return res;
// }
// function post(root, res) {
//   if (root === null) return;
//   post(root.left, res);
//   post(root.right, res);
//   res.push(root.val);
// }
var postorderTraversal = function (root) {

}
// @lc code=end

