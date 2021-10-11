/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
// var deleteDuplicates = function (head) {
//   let ret = new ListNode(null, head);
//   let p = ret, q = p.next;
//   while (q && q.next) {
//     if (q.val === q.next.val) {
//       do {
//         q = q.next;
//       } while (q.next && q.val == q.next.val)
//       p.next = q.next;
//       q = q.next;
//     } else {
//       p = p.next;
//       q = q.next;
//     }
//   }
//   return ret.next;
// };


var deleteDuplicates = function (head) {

}
// @lc code=end

