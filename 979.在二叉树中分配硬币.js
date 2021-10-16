/*
 * @lc app=leetcode.cn id=979 lang=javascript
 *
 * [979] 在二叉树中分配硬币
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
 * @return {number}
 */
var distributeCoins = function(root) {
  function dfs(root) {
    if (root == null) return [0, 0];
    //移动的步数，一个是需要的金币的数量 
    let left = dfs(root.left), right = dfs(root.right), read = (right[1] + left[1] + root.val - 1);
    return [Math.abs(read) + left[0] + right[0], read]
  }
  return dfs(root)[0];
};
// @lc code=end

