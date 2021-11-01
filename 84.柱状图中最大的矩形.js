/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let stack = [];
  let l = new Array(heights.length), r = new Array(heights.length);
  let n = heights.length;
  for (let i = 0; i < n; i++) l[i] = -1, r[i] = n;
  for (let i = 0; i < n; i++) {
    while (stack.length && heights[i] <= heights[stack[stack.length - 1]]) {
      r[stack[stack.length - 1]] = i;
      stack.pop();
    }
    if (stack.length) l[i] = stack[stack.length - 1];
    stack.push(i)
  }
  let ans = 0;
  for (let i = 0; i < n; i++){
    ans = Math.max(ans, heights[i] * (r[i] - l[i] - 1));
  }
  return ans;
};
// @lc code=end

