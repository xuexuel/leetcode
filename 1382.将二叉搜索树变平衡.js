/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
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
 * @return {TreeNode}
 */
var getNodes = function (root, arr) {
  if (root == null) return null;
  getNodes(root.left,arr);
  arr.push(root);
  getNodes(root.right, arr);
  return;
}
var buildTree = function (arr, l,r) {
  if (l > r) return null;
  let mid = (l + r) >> 1;
  let root = arr[mid];
  root.left = buildTree(arr, l, mid - 1);
  root.right = buildTree(arr, mid + 1, r);
  return root
}
var balanceBST = function(root) {
  let arr = [];
  getNodes(root, arr);
  return buildTree(arr, 0, arr.length - 1);
};
// @lc code=end

