/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function (l1, l2) {
  let ret = new ListNode(null);
  let cur = ret;
  while (l1 || l2) {
    let temp = null;
    if (!l1) {
      temp = new ListNode(l2.val);
      l2 = l2.next;
    } else if (!l2 || l1.val <= l2.val) {
      temp = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      temp = new ListNode(l2.val);
      l2 = l2.next;
    }
    cur.next = temp;
    cur = cur.next;
  }
  return ret.next;
};

// @lc code=end

