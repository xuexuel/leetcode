/*
 * @lc app=leetcode.cn id=1094 lang=javascript
 *
 * [1094] 拼车
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
// 差分数组⼯具类
class Difference {
  constructor(nums) {
    this.diff = [];
    this.init(nums)
  }
  init(nums) {
    if (nums.length == 0) return;
    this.diff[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
  }
  increment(i,j,val) {
    this.diff[i] += val;
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
    }
  }
  result() {
    let res = [];
    res[0] = this.diff[0];
    for (let i = 1; i < this.diff.length; i++) {
      res[i] = res[i - 1] + this.diff[i];
    }
    return res;
  }
}
var carPooling = function(trips, capacity) {
  let arr = new Array(1001).fill(0);
  let df = new Difference(arr);
  for (let trip of trips) {
    let val = trip[0];
    let i = trip[1];
    let j = trip[2] - 1;
    df.increment(i, j, val);
  }
  let res = df.result();
  for (let i = 0; i < res.length; i++) {
    if (capacity < res[i]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

