/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (map.has(item)) {
      map.set(item,-1);
    } else {
      map.set(item, i);
    }
  }
  let arr = Array.from(map).filter(item => item[1] !== -1);
  arr.sort((a, b) => {
    return a[1] > b[1];
  })
  return arr.length?arr[0][1]:-1;
};
// @lc code=end

