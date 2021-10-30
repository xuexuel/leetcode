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
  const res = [];
  backtrack(nums, []);
  return res;
  function backtrack(nums, track) {
    if (track.length === nums.length) {
      res.push(track);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (track.includes(nums[i])) {
        continue;
      };
      track.push(nums[i]);
      const newTrack = [...track];
      backtrack(nums, newTrack);
      track.pop();
    }
  }
};
// @lc code=end

