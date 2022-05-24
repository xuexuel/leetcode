/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  if (root == null) return [];
  let arr = [], res = [];
  arr.push(root);
  arr.push('#');
  let maxValue = Number.MIN_SAFE_INTEGER;
  while (arr.length > 0) {
    let node = arr.shift();
    if (node == '#') {
      res.push(maxValue);
      arr.push('#');
      maxValue = Number.MIN_SAFE_INTEGER;
    } else if (node != null) {
      maxValue = Math.max(maxValue, node.val);
      if (node.left != null) {
        arr.push(node.left);
      }
      if (node.right != null) {
        arr.push(node.right);
      }
    }
    if (arr.length == 1) {
      res.push(maxValue);
      return res;
    }
  }
};
// @lc code=end

