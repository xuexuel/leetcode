/*
 * @lc app=leetcode.cn id=1306 lang=javascript
 *
 * [1306] 跳跃游戏 III
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
  const val = arr[start];
  if (val === 0) return true;
  if (val === -1) return false;
  arr[start] = -1;
  return (start - val >= 0 && canReach(arr, start - val)) || (start + val < arr.length && canReach(arr, start + val));
};
// @lc code=end

