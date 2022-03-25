/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root == null) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    let temp = new TreeNode(null);
    if (root.left == null || root.right == null) {
      let temp = root.left ? root.left : root.right;
      return temp
    } else {
      temp = predeccessor(root);
      root.val = temp.val;
      root.left = deleteNode(root.left,temp.val)
    }
  }
  return root
};
var predeccessor = function (root) {
  let temp = root.left;
  while (temp.right) {
    temp = temp.right
  }
  return temp;
}
// @lc code=end

