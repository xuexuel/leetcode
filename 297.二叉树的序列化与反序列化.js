/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let arr = [];
  serializeTree(root, arr);
  return arr.join(',');
};

var serializeTree = function (root,arr) {
  if (!root) {
    arr.push('#');
    return;
  }
  arr.push(root.val);
  serializeTree(root.left, arr);
  serializeTree(root.right, arr);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = data.split(',');
  return rdeserialize(arr);
};

var rdeserialize = function(arr){
  if (arr[0] === "#") {
    arr.shift();
      return null;
  }
  const root = new TreeNode(parseInt(arr[0]));
  arr.shift();
  root.left = rdeserialize(arr);
  root.right = rdeserialize(arr);
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

