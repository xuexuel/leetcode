/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
// class MyCircularQueue {
//   constructor(k) {
//     this.arr = new Array(k);
//     this.cnt = 0;
//     this.head = 0;
//     this.tail = 0;
//   }
//   enQueue(value) {
//     if (this.isFull()) return false;
//     this.cnt += 1;
//     this.arr[this.tail] = value;
//     this.tail = (this.tail + 1) % this.arr.length;
//     return true;
//   }
//   deQueue() {
//     if (this.isEmpty()) return false;
//     this.cnt -= 1;
//     this.head = (this.head + 1) % this.arr.length;
//     return true;
//   }
//   Front() {
//     if (this.isEmpty()) return -1;
//     return this.arr[this.head];
//   }
//   Rear() {
//     if (this.isEmpty()) return -1;
//     return this.arr[(this.tail - 1 + this.arr.length) % this.arr.length]
//   }
//   isEmpty() {
//     return this.cnt === 0
//   }
//   isFull() {
//     return this.cnt === this.arr.length;
//   }

// }
class MyCircularQueue {

}
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

