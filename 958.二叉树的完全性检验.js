/*
 * @lc app=leetcode.cn id=958 lang=javascript
 *
 * [958] 二叉树的完全性检验
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
var isCompleteTree = function (root) {
  if (root === null) return true;
  let n = nodeCount(root), m = 1, cnt = 1;
  while (cnt + 2 * m <= n) {
    m *= 2;
    cnt += m;
  }
  return judge(root, n, m);
};
function nodeCount(root) {
  if (root === null) return 0;
  return nodeCount(root.left) + nodeCount(root.right) + 1;
}
function judge(root, n, m) {
  if (root === null) return n === 0;
  if (n === 0) return false;
  if (n === 1) return root.left === null && root.right === null;
  let k = Math.max(0, 2 * m - 1);
  let l = Math.min(m, n - k), r = n - k - l;
  return judge(root.left, (k - 1) / 2 + l, m / 2) && judge(root.right, (k - 1) / 2 + r, m / 2);
}
// @lc code=end

