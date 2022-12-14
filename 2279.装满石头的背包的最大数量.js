/*
 * @lc app=leetcode.cn id=2279 lang=javascript
 *
 * [2279] 装满石头的背包的最大数量
 */

// @lc code=start
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  let arr = [];
  let n = capacity.length;
  for (let i = 0; i < n; i++) {
    const item = capacity[i] - rocks[i];
    arr.push(item);
  }
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < n; i++) {
    if (additionalRocks < arr[i]) return i;
    additionalRocks -= arr[i];
  }
  return n;
};
// @lc code=end

