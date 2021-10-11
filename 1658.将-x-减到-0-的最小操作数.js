/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

// 前缀和数组
var minOperations = function(nums, x) {
  let sumL = new Array(nums.length + 1);
  let sumR = new Array(nums.length + 1);
  sumL[0] = sumR[0] = 0;
  for (let i = 0; i < nums.length; i++){
    sumL[i + 1] = sumL[i] + nums[i];
  }
  for (let i = nums.length - 1; i >= 0; --i){
    sumR[nums.length - i] = sumR[nums.length - i - 1] + nums[i];
  }
  let ans = -1;
  for (let i = 0; i < sumL.length; i++){
    let j = binarySearch(sumR, x - sumL[i]);
    if (j == -1) continue;
    if (i + j > nums.length) continue;
    if (ans == -1 || ans > i + j) ans = i + j;
  }
  return ans;
};
var binarySearch = function (nums, x) {
  let head = 0, tail = nums.length - 1, mid;
  while (head <= tail) {
    mid = (head + tail) >> 1;
    if (nums[mid] == x) return mid;
    if (nums[mid] < x) head = mid + 1;
    else tail = mid - 1;
  }
  return -1;
};
// @lc code=end

