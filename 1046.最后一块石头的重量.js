/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
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
  push(num) {
    this.data.push(num);
    this.shiftUp(this.size() - 1);
  }
  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.data.pop();
    let res = this.data[0];
    this.data[0] = this.data.pop();
    this.shiftDown(0);
    return res;

  }
  size() {
    return this.data.length;
  }
  swap(i, j) {
    if (i === j) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
}

var lastStoneWeight = function (stones) {
  let arr = new maxHeap(stones);
  while (arr.size() > 1) {
    let s1 = arr.pop();
    let s2 = arr.pop();
    if (s1 !== s2) {
      arr.push(s1 - s2);
    }
  }
  if (arr.size() > 0) {
    return arr.pop();
  } else {
    return 0;
  }
};
// @lc code=end

