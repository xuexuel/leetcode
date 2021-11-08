/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  const recursion = (root) => {
    if (!root) return 0
    const dfs = (cRoot, leave) => {
      if (!cRoot) return 0
      const flag = (cRoot.val === leave) ? 1 : 0
      const cLeft = dfs(cRoot.left, leave - cRoot.val)
      const cRight = dfs(cRoot.right, leave - cRoot.val)
      return flag + cLeft + cRight
    }
    const page = dfs(root, targetSum)
    const left = recursion(root.left)
    const right = recursion(root.right)
    return page + left + right
  }
  return recursion(root)
};
// @lc code=end

