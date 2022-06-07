/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// var minDepth = function (root) {
//   if (root === null) return 0;
//   if (root.left === null && root.right !== null) {
//     return 1 + minDepth(root.right);
//   }
//   if (root.right === null && root.left !== null) {
//     return 1 + minDepth(root.left);
//   }
//   return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
// };

// BFS算法
var minDepth = function (root) {
  if (root == null) return 0;
  let q = [];
  q.push(root);
  let depth = 1;
  while (q.length != 0) {
    let sz = q.length;
    for (let i = 0; i < sz; i++) {
      let cur = q.shift();
      if (cur.left == null && cur.right == null) {
        return depth;
      } else {

        if (cur.left != null) {
          q.push(cur.left);
        }
        if (cur.right != null) {
          q.push(cur.right);
        }
      }
    }
    depth++;
  }
  return depth;
}
// @lc code=end

