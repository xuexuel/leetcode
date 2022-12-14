/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//   let pre = 0, maxAns = nums[0];
//   nums.forEach((x) => {
//     pre = Math.max(pre + x, x);
//     maxAns = Math.max(maxAns, pre);
//   });
//   return maxAns;
// };

// var maxSubArray = function (nums) { 
//   let n = nums.length;
//   if (n == 0) return 0;
//   let dp = new Array(n+1).fill(0);
//   dp[0] = nums[0];
//   for (let i = 1; i < n; i++){
//     dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
//   }
//   let res = -Infinity;
//   for (let i = 0; i < n; i++){
//     res = Math.max(res, dp[i]);
//   }
//   return res;
// }

var maxSubArray = function (nums) { 
  let n = nums.length;
  if (n == 0) return 0;
  let dp_0 = nums[0];
  let dp_1 = 0, res = dp_0;
  for (let i = 1; i < n; i++){
    dp_1 = Math.max(nums[i], nums[i] + dp_0);
    dp_0 = dp_1;
    res = Math.max(res, dp_1);
  }
  return res;
}
// @lc code=end

