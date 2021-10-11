/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// function reverseN(head, n) {
//   if (n == 1) return head;
//   let p = reverseN(head.next, n - 1);
//   let tail = head.next;
//   head.next = tail.next;
//   tail.next = head;
//   return p;
// }
// var reverseBetween = function (head, left, right) {
//   let ret = new ListNode(null, head);
//   let p = ret;
//   let cnt = right - left + 1;
//   while (--left) {
//     p = p.next;
//   }
//   p.next = reverseN(p.next, cnt);
//   return ret.next;
// };


var reverseBetween = function (head, left, right) {

}

// @lc code=end
