/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//   if (!head || !head.next) return head;
//   let p = head.next;
//   head.next = swapPairs(p.next);
//   p.next = head;
//   return p;
// };

var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let p = head.next;
  head.next = swapPairs(p.next);
  p.next = head;
  return p;
}
// @lc code=end

