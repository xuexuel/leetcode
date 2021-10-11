/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  return merge(lists, 0, lists.length - 1);
};
var merge = function (lists, l, r) {
  if (l == r) return lists[l];
  if (l > r) return null;
  let mid = (l + r) >> 1;
  return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r));
}
var mergeTwoLists = function (a, b) {
  if (a === null || b === null) return a === null ? b : a;
  let head = new ListNode(0);
  let tail = head, i = a, j = b;
  while (i != null && j != null) {
    if (i.val < j.val) {
      tail.next = i;
      i = i.next;
    } else {
      tail.next = j;
      j = j.next;
    }
    tail = tail.next;;
  }
  tail.next = i === null ? j : i;
  return head.next;
}
// @lc code=end

