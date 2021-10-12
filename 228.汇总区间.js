/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  let start = nums[0], end = nums[0], arr = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 == nums[i]) {
      end++;
    } else {
      if (start === end) arr.push(start.toString());
      else arr.push(start + '->' + end);
      end = nums[i];
      start = end;
    }
  }
  if (start === end) arr.push(start.toString());
  else arr.push(start + '->' + end);
  return arr;
};
// @lc code=end

