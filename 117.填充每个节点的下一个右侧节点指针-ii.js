/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  let p = root;
  while (p = layer_connect(p));
  return root;
};
var layer_connect = function (head) {
  let p = head, pre = null, new_head = null;
  while (p) {
    if (p.left) {
      if (pre) pre.next = p.left;
      pre = p.left;
    }
    if (new_head == null) new_head = pre;
    if (p.right) {
      if (pre) pre.next = p.right;
      pre = p.right;
    }
    if (new_head == null) new_head = pre;
    p = p.next;
  }
  return new_head;
}
// @lc code=end

