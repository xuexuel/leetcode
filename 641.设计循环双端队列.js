/*
 * @lc app=leetcode.cn id=641 lang=javascript
 *
 * [641] 设计循环双端队列
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
// class MyCircularDeque {
//   constructor(k) {
//     this.arr = new Array(k);
//     this.head = 0;
//     this.tail = 0;
//     this.cnt = 0;
//   }
//   insertFront(value) {
//     if (this.isFull()) return false;
//     this.cnt += 1;
//     this.head = (this.head - 1 + this.arr.length) % this.arr.length;
//     this.arr[this.head] = value;
//     return true;
//   }
//   insertLast(value) {
//     if (this.isFull()) return false;
//     this.cnt += 1;
//     this.arr[this.tail] = value;
//     this.tail = (this.tail + 1) % this.arr.length;
//     return true;
//   }
//   deleteFront() {
//     if (this.isEmpty()) return false;
//     this.cnt -= 1;
//     this.head = (this.head + 1) % this.arr.length;
//     return true;
//   }
//   deleteLast() {
//     if (this.isEmpty()) return false;
//     this.cnt -= 1;
//     this.tail = (this.tail - 1 + this.arr.length) % this.arr.length;
//     return true;
//   }
//   getFront() {
//     if (this.isEmpty()) return -1;
//     return this.arr[this.head];
//   }
//   getRear() {
//     if (this.isEmpty()) return -1;
//     return this.arr[(this.tail - 1 + this.arr.length) % this.arr.length];
//   }
//   isEmpty() {
//     return this.cnt === 0;
//   }
//   isFull() {
//     return this.cnt === this.arr.length;
//   }
// }
class MyCircularDeque {

}
/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.deleteLast()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
// @lc code=end

