/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let backtrack = (nums, track) => {
    if (track.length === nums.length) {
      res.push(track);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!track.includes(nums[i])) {
        track.push(nums[i]);
        backtrack(nums, [...track]);
        track.pop();
      }
    }
  }
  backtrack(nums, []);
  return res;
};
// @lc code=end

