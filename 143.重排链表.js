/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
// var reorderList = function (head) {
//   if (!head) return head;
//   if (!head.next) return head;
//   let slow = head, fast = head.next;
//   while (fast && fast.next) {
//     slow = slow.next;
//     (fast = fast.next) & (fast = fast.next);
//   }
//   let sec = slow.next;
//   slow.next = null;

//   let ret = null, pre = ret, cur = sec, tail = sec.next;
//   while (cur) {
//     cur.next = pre;
//     pre = cur;
//     (cur = tail) && (tail = tail.next);
//   }
//   slow = head, fast = pre;

//   ret = new ListNode(-1);
//   cur = ret;
//   while (slow) {
//     cur.next = slow;
//     slow = slow.next;
//     cur = cur.next;
//     if (fast) {
//       cur.next = fast;
//       fast = fast.next;
//       cur = cur.next;
//     }
//   }
// }
var reorderList = function (head) {

}
// @lc code=end

