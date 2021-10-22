/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let arr = [root, '*'];
  let ret = [], sum = 0, i = 0;
  while (arr.length>0) {
    let top = arr.shift();
    if (top === '*') {
      ret.push(sum / i);
      if (arr.length !== 0) arr.push('*');
      i = 0;
      sum = 0;
    } else if(top) {
      sum += Number(top.val);
      i++;
      if(top.left) arr.push(top.left);
      if(top.right) arr.push(top.right);
    }
  }
  return ret;
};
// @lc code=end

