/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let ans = -Infinity, max_num = 1, min_num = 1;
  for (const x of nums) {
    if (x < 0) [max_num, min_num] = [min_num, max_num];
    max_num = Math.max(x*max_num, x);
    min_num = Math.min(x*min_num, x);
    ans = Math.max(ans, max_num);
  }
  return ans;
};
// @lc code=end

