/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const nums = this.nums.slice(0);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    const rand = randOne(i, n - 1);
    [nums[i], nums[rand]] = [nums[rand], nums[i]];
  }
  return nums;
};

function randOne(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

