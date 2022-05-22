/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  return buildPrePost(preorder, 0, preorder.length - 1,
    postorder, 0, postorder.length - 1);
};
var buildPrePost = function (preorder, preStart, preEnd, postorder, postStart, postEnd) {
  if (preStart > preEnd) {
    return null;
  }
  if (preStart == preEnd) {
    return new TreeNode(preorder[preStart]);
  }
  let rootVal = preorder[preStart];
  let leftRootVal = preorder[preStart + 1];
  let index = 0;
  for (let i = postStart; i < postEnd; i++) {
    if (postorder[i] == leftRootVal) {
      index = i;
      break;
    }
  }
  let leftSize = index - postStart + 1;
  let root = new TreeNode(rootVal);
  root.left = buildPrePost(preorder, preStart + 1, preStart + leftSize,
    postorder, postStart, index);
  root.right = buildPrePost(preorder, preStart + leftSize + 1, preEnd,
    postorder, index + 1, postEnd - 1);
  return root;
}
// @lc code=end

