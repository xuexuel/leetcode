/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let n = nums.length;
  let preSum = new Map()
  preSum.set(0,1)
  let res = 0, sum0_i = 0;
  for (let i = 0; i < n; i++) {
      sum0_i += nums[i];
      // 这是我们想找的前缀和 nums[0..j]
      let sum0_j = sum0_i - k;
      // 如果前⾯有这个前缀和，则直接更新答案
      if (preSum.has(sum0_j)){
          res += preSum.get(sum0_j);
      }
      // 把前缀和 nums[0..i] 加⼊并记录出现次数
      let value = preSum.get(sum0_i)?preSum.get(sum0_i):0
      preSum.set(sum0_i, value + 1);
  }
  return res;
};
// @lc code=end

