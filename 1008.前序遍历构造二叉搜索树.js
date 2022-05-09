/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var buildTree = function (nums, l, r) {
  if (l > r) return null;
  let ind = l + 1;
  while (nums[ind] < nums[l]) ++ind;
  let root = new TreeNode(nums[l]);
  root.left = buildTree(nums, l + 1, ind - 1);
  root.right = buildTree(nums, ind, r);
  return root;
}
var bstFromPreorder = function(preorder) {
  return buildTree(preorder, 0, preorder.length - 1);

};
// @lc code=end

