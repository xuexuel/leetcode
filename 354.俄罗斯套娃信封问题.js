/*
 * @lc app=leetcode.cn id=354 lang=javascript
 *
 * [354] 俄罗斯套娃信封问题
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  let n = envelopes.length;
  envelopes.sort((a, b) => {
    return a[0] == b[0] ? (b[1] - a[1]) : (a[0] - b[0]);
  })
  let height = new Array(n);
  for (let i = 0; i < n; i++) {
    height[i] = envelopes[i][1];
  }
  return lengthOfLIS(height)
};

var lengthOfLIS = function (nums) {
  let top = new Array(nums.length);
  let piles = 0;
  for (let i = 0; i < nums.length; i++) {
    let poker = nums[i];
    let left = 0, right = piles;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (top[mid] > poker) {
        right = mid;
      } else if (top[mid] < poker) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (left == piles) piles++;
    top[left] = poker;
  }
  return piles;
}
// @lc code=end

