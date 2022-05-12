/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let ret = [];
  inorder(root, ret);
  let p = 0, q = ret.length - 1;
  while (p < q && ret[p] + ret[q] - k) {
    if (ret[p] + ret[q] < k) p += 1;
    else q -= 1;
  }
  return p < q;
};
var inorder = function (root, ret) {
  if (root == null) return;
  inorder(root.left, ret);
  ret.push(root.val);
  inorder(root.right, ret);
  return;
}
// @lc code=end

