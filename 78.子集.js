/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let n = nums.length;
  let ret = [];
  for (let i = 0, I = (1 << n); i < I; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) arr.push(nums[j]);
    }
    ret.push(arr);
  }
  return ret;
};
// @lc code=end

