/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for (const num of nums) {
    const x = (num - 1) % nums.length;
    nums[x] += nums.length;
  }
  let ret = [];
  for (let [i,num] of nums.entries()) {
    if (num <= nums.length) ret.push(i + 1);
  }
  return ret;
};
// @lc code=end

