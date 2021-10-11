/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let red = 0, blue = nums.length - 1, p = 0;
  while (p <= blue) {
    switch (nums[p]) {
      case 0:
        [nums[red], nums[p]] = [nums[p], nums[red]];
        red += 1;
        p += 1;
        break;
      case 1:
        p += 1;
        break;
      case 2:
        [nums[blue], nums[p]] = [nums[p], nums[blue]];
        blue -= 1;
        break;
      default:
        break;
    }
  }
};
// @lc code=end

