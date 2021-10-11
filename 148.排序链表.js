/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function (head) {
  return quickSort(head, null);
  function quickSort(head, end) {
    if (head === end || head.next === end) {
      return head;
    }
    let lhead = head, rhead = head, p = head.next;
    while (p != end) {
      let next = p.next;
      if (p.val < head.val) {
        p.next = lhead;
        lhead = p;
      } else {
        rhead.next = p;
        rhead = p;
      }
      p = next;
    }
    rhead.next = end;
    let node = quickSort(lhead, head);
    head.next = quickSort(head.next, end);
    return node;
  }
};
// @lc code=end

