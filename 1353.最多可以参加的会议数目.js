/*
 * @lc app=leetcode.cn id=1353 lang=javascript
 *
 * [1353] 最多可以参加的会议数目
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @return {number}
 */

var maxEvents = function (events) {
  let set = new Set();
  events.sort((a, b) => a[1] - b[1]);
  let flag = true;
  for (let i = 1; i < events.length; i++) {
    if (events[i][1] === events[i - 1][1]) {
      flag = false;
      break;
    }
  }
  if (flag) return events.length;
  for (const event of events) {
    for (let i = event[0]; i <= event[1]; i++){
      if (!set.has(i)) {
        set.add(i);
        break;
      }
    }
  }
  return set.size;
}
// @lc code=end

