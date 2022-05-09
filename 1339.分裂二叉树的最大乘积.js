/*
 * @lc app=leetcode.cn id=1339 lang=javascript
 *
 * [1339] 分裂二叉树的最大乘积
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
let avg, ans = 0;
var maxProduct = function(root) {
  let total = getTotal(root);
  avg = total / 2;
  ans = total;
  getTotal(root);
  return ans * (total - ans) % (1e9 + 7);
};
var getTotal = function(root){
  if (root == null) return 0;
  let val = root.val + getTotal(root.left) + getTotal(root.right);
  if(Math.abs(val - avg) < Math.abs(ans - avg)) ans = val;
  return val;
}
// @lc code=end

