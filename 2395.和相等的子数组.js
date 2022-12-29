/*
 * @lc app=leetcode.cn id=2395 lang=javascript
 *
 * [2395] 和相等的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
  const n = nums.length
  let sumArr = new Array(n - 1).fill(0)
  for (let i = 0; i < n - 1; i++) {
      sumArr[i] = nums[i] + nums[i + 1]
  }
  return new Set(sumArr).size !== n - 1
};
// @lc code=end

