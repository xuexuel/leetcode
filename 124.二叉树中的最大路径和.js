/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
// var maxPathSum = function (root) {
//   let maxSum = Number.MIN_SAFE_INTEGER;
//   const dfs = (root) => {
//     if (root === null) return 0;
//     let left = dfs(root.left);
//     let right = dfs(root.right);
//     let innerMaxSum = left + root.val + right;
//     maxSum = Math.max(maxSum, innerMaxSum);
//     let res = root.val + Math.max(left, right);
//     return res < 0 ? 0 : res;
//   }
//   dfs(root);
//   return maxSum;
// };
var maxPathSum = function (root) {

}
// @lc code=end

