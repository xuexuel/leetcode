/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// var copyRandomList = function (head) {
//   if (!head) return head;
//   let p = head, q;
//   while (p) {
//     let temp = new Node(p.val, p.next, p.random);
//     p.next = temp;
//     p = temp.next;
//   }
//   q = head.next;
//   while (q) {
//     if (q.random) q.random = q.random.next;
//     (q = q.next) && (q = q.next);
//   }
//   let new_head = head.next;
//   p = head, q = new_head;
//   while (q) {
//     p.next = q.next;
//     p = q;
//     q = q.next;
//   }
//   return new_head;
// }

var copyRandomList = function (head) {

}
// @lc code=end

