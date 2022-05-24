/*
 * @lc app=leetcode.cn id=1373 lang=javascript
 *
 * [1373] 二叉搜索子树的最大键值和
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
var maxSumBST = function (root) {
  let maxSum = 0;
  let traverse = (root) => {
    if (root == null) return [1, Infinity, -Infinity, 0];
    let left = traverse(root.left);
    let right = traverse(root.right);
    let res = [];
    if (left[0] == 1 && right[0] == 1 && root.val > left[2] && root.val < right[1]) {
      res[0] = 1;
      res[1] = Math.min(left[1], root.val);
      res[2] = Math.max(right[2], root.val);
      res[3] = (left[3] == -Infinity ? 0 : left[3]) + (right[3] == -Infinity ? 0 : right[3]) + parseInt(root.val);
      maxSum = Math.max(maxSum, res[3]);
    } else {
      res[0] = 0;
    }
    return res;
  }
  traverse(root);
  return maxSum;
};
// @lc code=end

