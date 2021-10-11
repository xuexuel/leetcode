/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function (root, k) {
//   let cnt = getCount(root.left);
//   if (cnt + 1 === k) return root.val;
//   if (cnt >= k) {
//     return kthSmallest(root.left, k);
//   } else if (cnt < k) {
//     return kthSmallest(root.right, k - cnt - 1);
//   }

// };
// function getCount(root) {
//   if (!root) return 0;
//   return getCount(root.left) + getCount(root.right) + 1;
// }
var kthSmallest = function (root, k) {

}
// @lc code=end

