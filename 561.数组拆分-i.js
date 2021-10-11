/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let arr = nums.sort((a, b) => a - b);
  let i = 1, res = 0;
  while (i < arr.length) {
    res = res + arr[i - 1];
    i += 2;
  }
  return res;
};
// @lc code=end

