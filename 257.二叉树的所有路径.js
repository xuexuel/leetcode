/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let arr = [];
  const binaryTree = (root,path) => {
    if (root) {
      path += root.val.toString();
      if (root.left === null && root.right === null) { // 当前节点是叶子节点
          arr.push(path); // 把路径加入到答案中
      } else {
          path += "->"; // 当前节点不是叶子节点，继续递归遍历
          binaryTree(root.left, path);
          binaryTree(root.right, path);
      }
    }
  }
  binaryTree(root, '');
  return arr;
};
// @lc code=end

