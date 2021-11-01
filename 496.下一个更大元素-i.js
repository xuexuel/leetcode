/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let map = new Map(), stack = [], ans = [];
  nums2.forEach(item => {
    while (stack.length && item > stack[stack.length - 1]) {
      map.set(stack.pop(), item)
    };
    stack.push(item);
  });
  stack.forEach(item => map.set(item, -1));
  nums1.forEach(item => ans.push(map.get(item)));
  return ans;
};
// @lc code=end

