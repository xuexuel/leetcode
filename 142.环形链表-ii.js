/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// *快慢指针进阶版
// var detectCycle = function (head) {
//   let slow = head, fast = head, start = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       while (start !== fast) {
//         start = start.next;
//         fast = fast.next;
//       }
//       return fast;
//     }
//   }
//   return null;
// };

// *缓存版  空间换时间
// var detectCycle = function (head) {
//   let cache = new Set();
//   while (head) {
//     if (cache.has(head)) return head;
//     else cache.add(head);
//     head = head.next;
//   }
//   return null;
// };
var detectCycle = function (head) {

}
// @lc code=end

