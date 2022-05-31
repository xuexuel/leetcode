/*
 * @lc app=leetcode.cn id=1392 lang=javascript
 *
 * [1392] 最长快乐前缀
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
  let n = s.length, j = -1;
  let next = new Array(n);
  next[0] = -1;
  for (let i = 1; i < s.length; i++) {
    while (j != -1 && s[j + 1] != s[i]) j = next[j];
    if (s[j + 1] === s[i]) j += 1;
    next[i] = j;
  }
  return s.substring(0, next[n - 1] + 1);
};
// @lc code=end

