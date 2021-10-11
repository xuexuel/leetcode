/*
 * @lc app=leetcode.cn id=1367 lang=javascript
 *
 * [1367] 二叉树中的列表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
  if (head === null) return true;
  if (root === null) return false;
  if (root.val === head.val && judge(head, root)) return true;
  return isSubPath(head, root.left) || isSubPath(head, root.right);
};
function judge(head, root) {
  if (head === null) return true;
  if (root === null) return false;
  if (root.val !== head.val) return false;
  return judge(root.left, head.next) || judge(root.right, head.next)
}
// @lc code=end

