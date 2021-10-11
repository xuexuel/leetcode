/*
 * @lc app=leetcode.cn id=1302 lang=javascript
 *
 * [1302] 层数最深叶子节点的和
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
 var deepestLeavesSum = function(root) {
  let ans = [0],maxDepth = [-1];
  getResult(root,ans,0,maxDepth);
  return ans[0];
 };
 var getResult = function(root,ans,depth,maxDepth){
  if(root == null) {
  return;
  }
  if(maxDepth[0] < depth){
  maxDepth[0] = depth;
  ans[0] = root.val;
  }else{
  if(maxDepth[0] == depth){
  ans[0] += root.val;
  }
  }
  getResult(root.left,ans,depth+1,maxDepth);
  getResult(root.right,ans,depth+1,maxDepth);
 }
// @lc code=end

