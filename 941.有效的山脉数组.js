/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  const n = arr.length - 1;
  let i = 0;
  while (i < n && arr[i] < arr[i + 1]) {
    i++;
  }
  if (i === 0 || i === n) {
    return false;
  }
  while (i < n && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === n;
};
// @lc code=end

