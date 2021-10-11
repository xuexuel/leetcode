/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
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
 * @return {ListNode[]}
 */
// var splitListToParts = function (head, k) {
//   let list = [];
//   let cur = head, len = 0;
//   while (cur) {
//     cur = cur.next;
//     len += 1;
//   }
//   cur = head;
//   while (cur) {
//     let part = new ListNode(null);
//     let q = part;
//     let n = Math.ceil(len / k);
//     len -= n;
//     while (n > 0) {
//       q.next = new ListNode(cur.val);
//       cur = cur.next;
//       q = q.next;
//       n--;
//     }
//     list.push(part.next);
//     k--;
//   }
//   while (k) {
//     list.push(new ListNode(null, null).next);
//     k--;
//   }
//   return list;
// };
var splitListToParts = function (head, k) {

}
// @lc code=end

