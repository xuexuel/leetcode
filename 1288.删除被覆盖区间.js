/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => {
    if (a[0] == b[0]) return b[1] - a[1];
    return a[0] - b[0];
  });
  let i = 0, cnt = 0;
  while (i < intervals.length) {
    let [m, n] = intervals[i],j = i + 1;
    while (j < intervals.length && m <= intervals[j][0] && n >= intervals[j][1]) {
      cnt++;
      j++;
    }
    i = j;
  }
  return intervals.length - cnt; 
};
// @lc code=end

