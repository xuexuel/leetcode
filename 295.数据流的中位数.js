/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.heap1 = new maxHeap();
  this.heap2 = new minHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let temp = this.heap1.top();
  if (temp && temp < num) {
    this.heap2.push(num);
  } else {
    this.heap1.push(num);
  }
  let s1 = this.heap1.size(), s2 = this.heap2.size();
  if (s1 < s2) {
    this.heap1.push(this.heap2.pop());
  } else if (s1 > s2 + 1) {
    this.heap2.push(this.heap1.pop());
  }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let n = this.heap1.size() + this.heap2.size();
  if (n % 2 === 1) {
    return this.heap1.top();
  } else {
    return (this.heap1.top() + this.heap2.top()) / 2;
  }
};

class maxHeap {
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
      if (this.data[p_ind] < this.data[i]) {
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
      if (l_ind <= n && this.data[temp] < this.data[l_ind]) temp = l_ind;
      if (r_ind <= n && this.data[temp] < this.data[r_ind]) temp = r_ind;
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
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

