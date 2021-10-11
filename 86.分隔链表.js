/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */

// var partition = function (head, x) {
//   let r1 = new ListNode(null);
//   let r2 = new ListNode(null);
//   let p1 = r1, p2 = r2, cur = head;
//   while (cur) {
//     let temp = new ListNode(cur.val);
//     if (cur.val < x) {
//       p1.next = temp;
//       p1 = p1.next;
//     } else {
//       p2.next = temp;
//       p2 = p2.next;
//     }
//     cur = cur.next;
//   }
//   p1.next = r2.next;
//   return r1.next;
// }

var partition = function (head, x) {

}
// @lc code=end

