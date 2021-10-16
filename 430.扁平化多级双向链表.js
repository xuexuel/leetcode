/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (head == null) return null;
  let p = head, q, k;
  while (p) {
    k = null;
    if (p.child) {
      k = flatten(p.child);
      p.child = null;
      q = p.next;
      p.next = k;
      k.prev = p;
      while (p.next) p = p.next;
      p.next = q;
      if (q) q.prev = p;
    }
    p = p.next;
  }
  return head;
};
// @lc code=end

