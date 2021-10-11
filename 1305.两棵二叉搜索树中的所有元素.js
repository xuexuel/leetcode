/*
 * @lc app=leetcode.cn id=1305 lang=javascript
 *
 * [1305] 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
  let lnums = [], rnums = [];
  getResult(root1, lnums);
  getResult(root2, rnums);
  let ret = [];
  let p1 = 0, p2 = 0;
  while (p1 < lnums.length || p2 < rnums.length) {
    if ((p2 >= rnums.length) || (p1 < lnums.length && lnums[p1] <= rnums[p2])) {
      ret.push(lnums[p1++]);
    } else {
      ret.push(rnums[p2++]);
    }
  }
  return ret;
};

var getResult = function (root, arr) {
  if (root === null) return;
  getResult(root.left,arr);
  arr.push(root.val);
  getResult(root.right,arr);
}
// @lc code=end

