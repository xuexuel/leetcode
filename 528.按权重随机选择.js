/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */

var Solution = function (w) {
  this.sum = new Array(w.length).fill(0);
  this.sum[0] = w[0];
  for (let i = 1; i < w.length; ++i) {
    this.sum[i] = this.sum[i - 1] + w[i];
  }
  this.n = this.sum[this.sum.length - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let x =  Math.floor((Math.random() * this.n)) + 1;
  let head = 0, tail = this.sum.length - 1;
  while (head < tail) {
    let mid = (head + tail) >> 1;
    if (this.sum[mid] < x) head = mid + 1;
    else tail = mid;
  }
  return head;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end

