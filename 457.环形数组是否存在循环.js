/*
 * @lc app=leetcode.cn id=457 lang=javascript
 *
 * [457] 环形数组是否存在循环
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  const n = nums.length;
  const next = (nums, cur) => {
    const n = nums.length;
    return ((cur + nums[cur]) % n + n) % n; // 保证返回值在 [0,n) 中
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      continue;
    }
    let slow = i, fast = next(nums, i);
    // 判断非零且方向相同
    while (nums[slow] * nums[fast] > 0 && nums[slow] * nums[next(nums, fast)] > 0) {
      if (slow === fast) {
        if (slow !== next(nums, slow)) {
          return true;
        } else {
          break;
        }
      }
      slow = next(nums, slow);
      fast = next(nums, next(nums, fast));
    }
    let add = i;
    while (nums[add] * nums[next(nums, add)] > 0) {
      const tmp = add;
      add = next(nums, add);
      nums[tmp] = 0;
    }
  }
  return false;
};
// @lc code=end

