/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
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

var findKthLargest = function (nums, k) {
  let heap = new minHeap(nums);
  while (heap.size() > k) {
    heap.pop();
  }
  return heap.top();
};


// @lc code=end

