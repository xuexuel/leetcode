/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let cnt = 0;
  let item = 0;
  let head = null, tail = null;
  while (l1 || l2) {
    num1 = l1 ? l1.val : 0;
    num2 = l2 ? l2.val : 0;
    item = num1 + num2 + cnt;
    cnt = Math.floor(item / 10);
    if (!head) {
      head = tail = new ListNode(item % 10);
    } else {
      tail.next = new ListNode(item % 10);
      tail = tail.next;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (cnt !== 0) {
    tail.next = new ListNode(cnt);
  }
  return head;
};
// @lc code=end

