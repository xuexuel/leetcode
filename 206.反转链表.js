/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */

// *迭代解构
// var reverseList = function (head) {
//   let cur = head, prev = null;
//   while (cur) {
//     [cur.next, prev, cur] = [prev, cur, cur.next];
//   }
//   return prev;
// };

// 递归方法
// var reverseList = function (head) {
//   if (!head) return head;
//   if (!head.next) return head;
//   let cur = reverseList(head.next);
//   let tail = head.next;
//   head.next = tail.next;  // head.next=null;
//   tail.next = head;
//   return cur;
// };


// 迭代方法
// var reverseList = function (head) {
//   if (!head) return head;
//   let pre = null, cur = head, p = head.next;
//   while (cur) {
//     cur.next = pre;
//     pre = cur;
//     (cur = p) && (p = p.next);
//   }
//   return pre;
// };

var reverseList = function (head) {

};
// @lc code=end

