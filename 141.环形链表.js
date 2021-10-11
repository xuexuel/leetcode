/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */

// *快慢指针进阶版
// var hasCycle = function (head) {
//   let slow = head, fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) return true;
//   }
//   return false;
// };

// *缓存  空间换时间
// var hasCycle = function (head) {
//   let cache = new Set();
//   while (head) {
//     if (cache.has(head)) return true;
//     else cache.add(head);
//     head = head.next;
//   }
//   return false;
// };
var hasCycle = function (head) {

}
// @lc code=end

