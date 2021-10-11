/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
// var rotateRight = function (head, k) {
//   if (!head) return head;
//   let n = 1;
//   let p = head;
//   while (p.next) {
//     n += 1;
//     p = p.next;
//   }
//   p.next = head;
//   n = n - k % n;
//   while (n--) {
//     p = p.next;
//   }
//   head = p.next;
//   p.next = null;
//   return head;
// };
var rotateRight = function (head, k) {

}
// @lc code=end

