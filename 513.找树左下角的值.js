/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  let maxLevel = -Infinity,curLevel = 0,maxLeftVal = 0
  let preOrderTraversal = function (node) {
    if (!node) return
    curLevel++
    if (curLevel > maxLevel && !node.left && !node.right) {
      maxLevel = curLevel
      maxLeftVal = node.val
    }
    node.left && preOrderTraversal(node.left)
    node.right && preOrderTraversal(node.right)
    curLevel--
  }
  preOrderTraversal(root)
  return maxLeftVal
};
// @lc code=end

