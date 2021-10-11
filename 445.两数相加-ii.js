/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
// var addTwoNumbers = function (l1, l2) {
//   let stack1 = [], stack2 = [];
//   let ret = new ListNode(-1);
//   while (l1) {
//     stack1.push(Number(l1.val));
//     l1 = l1.next;
//   }
//   while (l2) {
//     stack2.push(Number(l2.val));
//     l2 = l2.next;
//   }
//   let temp = 0;
//   while (stack1.length || stack2.length || temp) {
//     let num1 = stack1[stack1.length - 1] === undefined ? 0 : stack1.pop();
//     let num2 = stack2[stack2.length - 1] === undefined ? 0 : stack2.pop();
//     let val = num1 + num2 + temp;
//     temp = Math.floor(val / 10);
//     let tt = new ListNode(val % 10, ret.next);
//     ret.next = tt;
//   }
//   return ret.next;
// };
var addTwoNumbers = function (l1, l2) {

}
// @lc code=end

