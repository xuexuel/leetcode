/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  return buildBinaryTree(nums, 0, nums.length - 1);
};
var buildBinaryTree = function (nums, l, r) {
  if (l > r) return null;
  let index = -1, maxVal =-1;
  for (let i = l; i <=r ; i++) {
    if (maxVal < nums[i]) {
      index = i;
      maxVal = nums[i];
    }    
  }
  let root = new TreeNode(maxVal);
  root.left = buildBinaryTree(nums, l, index - 1);
  root.right = buildBinaryTree(nums, index + 1, r);
  return root;
}
// @lc code=end

