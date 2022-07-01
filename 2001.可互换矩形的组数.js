/*
 * @lc app=leetcode.cn id=2001 lang=javascript
 *
 * [2001] 可互换矩形的组数
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
  let map = new Map();
  for(let el of rectangles) {
      let tmp = el[0] / el[1]
      if(!map.get(tmp)) {
          map.set(tmp, 1)
      } else {
          map.set(tmp, map.get(tmp) + 1)
      }
  }
  let ans= 0;
  for(let ele of map) {
      ans += (ele[1] * (ele[1] - 1)) / 2 
  }
  return ans
};
// @lc code=end

