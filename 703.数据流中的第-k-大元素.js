/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第 K 大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
class minHeap {
  constructor(data = []) {
    this.data = data;
    this.heapify();
  }
  heapify() {
    if (this.size() < 2) return;
    for (let i = 0; i < this.size(); i++) {
      this.shiftUp(i);
    }
  }
  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.data.pop();
    let res = this.data[0];
    this.data[0] = this.data.pop();
    this.shiftDown(0);
    return res;
  }
  shiftUp(i) {
    while (i) {
      let p_ind = (i - 1) >> 1;
      if (this.data[p_ind] > this.data[i]) {
        this.swap(p_ind, i);
        i = p_ind;
      } else {
        break;
      }
    }
  }
  shiftDown(i) {
    let n = this.size() - 1;
    while (i < n) {
      let l_ind = i * 2 + 1, r_ind = i * 2 + 2, temp = i;
      if (l_ind <= n && this.data[temp] > this.data[l_ind]) temp = l_ind;
      if (r_ind <= n && this.data[temp] > this.data[r_ind]) temp = r_ind;
      if (temp === i) break;
      this.swap(temp, i);
      i = temp;
    }
  }
  size() {
    return this.data.length;
  }
  push(num) {
    this.data.push(num);
    this.shiftUp(this.size() - 1);
  }
  swap(i, j) {
    if (i === j) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
  top() {
    return this.data[0];
  }
}
var KthLargest = function (k, nums) {
  this.heap = new minHeap();
  this.k = k;
  for (let n of nums) {
    this.add(n);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.push(val);
  if (this.heap.size() > this.k) {
    this.heap.pop();
  }
  return this.heap.top();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

