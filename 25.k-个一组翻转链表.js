/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */


// function __reverseN(head, n) {
//   if (n == 1) return head;
//   let p = __reverseN(head.next, n - 1);
//   let tail = head.next;
//   head.next = tail.next;
//   tail.next = head;
//   return p;
// }
// var reverseKGroup = function (head, k) {
//   let ret = new ListNode(null, head);
//   let p = ret, q = p.next;
//   while ((p.next = reverseN(q, k)) != q) {
//     p = q;
//     q = q.next;
//   }
//   return ret.next;
// };
// function reverseN(head, n) {
//   let cnt = n;
//   let p = head;
//   while (--cnt && p) {
//     p = p.next;
//   }
//   if (!p) return head;
//   return __reverseN(head, n);
// }


var reverseKGroup = function (head, k) {

}
// @lc code=end

