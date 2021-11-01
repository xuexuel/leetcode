/*
 * @lc app=leetcode.cn id=1856 lang=javascript
 *
 * [1856] 子数组最小乘积的最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  const sum = [0];
  const mod = 1e9 + 7;
  for (let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }
  let stack = [];
  const len = nums.length;
  const right = new Array(len).fill(len);
  for (let i = 0; i < len; i++) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[i]) {
      right[stack[stack.length - 1]] = i;
      stack.pop();
    }
    stack.push(i)
  }
  stack = [];
  const left = new Array(len).fill(-1);
  for (let j = len - 1; j >= 0; j--) {
    while (stack.length && nums[stack[stack.length - 1]] > nums[j]) {
      left[stack[stack.length - 1]] = j;
      stack.pop();
    }
    stack.push(j);
  }
  let max = BigInt(0);
  for (let k = 0; k < len; k++) {
    const total = BigInt(sum[right[k]] - sum[left[k] + 1]) * BigInt(nums[k]);
    if (max < total) {
      max = total;
    }
  }
  return max % BigInt(mod);
};
// @lc code=end

