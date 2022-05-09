/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
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
var corpFlightBookings = function(bookings, n) {
  let nums = new Array(n).fill(0);
  let df = new Difference(nums);
  for (booking of bookings) {
    let i = booking[0] - 1;
    let j = booking[1] - 1;
    let val = booking[2];
    df.increment(i, j, val);
  }
  return df.result();
};
// @lc code=end

