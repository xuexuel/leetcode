/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
let cnt, max_cnt;
let now;
let ret;
var getResult = function (root) {
  if (root == null) return;
  getResult(root.left);
  if (now.val == root.val) {
    cnt += 1;
  } else {
    now = root;
    cnt = 1;
  }
  if (cnt == max_cnt) {
    ret.push(now.val)
  } else if (cnt > max_cnt) {
    max_cnt = cnt;
    ret = [];
    ret.push(now.val)
  }
  getResult(root.right);
  return;
}

var findMode = function (root) {
  cnt = max_cnt = 0;
  now = root;
  ret = [];
  getResult(root);
  return ret;
};
// @lc code=end

