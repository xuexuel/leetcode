/*
 * @lc app=leetcode.cn id=2089 lang=javascript
 *
 * [2089] 找出数组排序后的目标下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var targetIndices = function(nums, target) {
//   nums.sort((a, b) => {
//     return a - b;
//   })
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (target == nums[i]) {
//       res.push(i);
//     }
//   }
//   return res;
// };
var targetIndices = function(nums, target) {
  let res = [];
  let same = 0, small = 0;
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) {
      same++;
    } else if (target > nums[i]) {
      small++;
    }
  }
  for (let i = 0; i < same; i++) {
    res.push(small + i);
  }
  return res;
};
// @lc code=end

