/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let total = nums.reduce((item1, item2) => item1 + item2);
  if (total % 2) return false;
  total = total / 2;
  let arr = new Array(total + 1).fill(0);
  arr[0] = 1;
  for (const x of nums) {
    for (let i = total; i >= x; i--){
      arr[i] |= arr[i - x];
    }
  }
  return arr[total];
};
// @lc code=end

