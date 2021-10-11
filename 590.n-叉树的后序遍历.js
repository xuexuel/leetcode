/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  let arr = [];
  function __postorder(root, arr) {
    if (!root) return null;
    for (let i = 0; i < root.children.length; i++) {
      __postorder(root.children[i],arr)
    }
    arr.push(root.val);
  }
  __postorder(root, arr);
  return arr;
};
// @lc code=end

