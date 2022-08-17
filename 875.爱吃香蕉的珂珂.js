/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let max = 0;
  for (const n of piles) {
    max = Math.max(max, n);
  }
  let left = 1, right = max + 1;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (canFinish(piles, mid, h)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
var canFinish = function (piles, speed, h) {
  let time = 0;
  for (const n of piles) {
    let num = Math.floor(n / speed) + ((n % speed > 0) ? 1 : 0);
    time += num;
  }
  return time <= h;
}
// @lc code=end

