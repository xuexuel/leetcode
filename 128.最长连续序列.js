/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let num_set = new Set(nums);
  let count = 0;
  for (const item of nums) {
    if (!num_set.has(item - 1)) {
      let cur = item;
      let cnt = 1;
      while (num_set.has(cur + 1)) {
        cur += 1;
        cnt += 1;
      }
      count = Math.max(count, cnt);
    }
  }
  return count;
};

// @lc code=end

