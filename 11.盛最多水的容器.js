/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let res = 0;
  let i = 0, j = height.length - 1;
  while (i < j) {
    let item = Math.min(height[i], height[j]) * (j - i);
    res = Math.max(res, item);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return res;
};
// @lc code=end

