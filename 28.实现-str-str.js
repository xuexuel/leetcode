/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  if (haystack === '') return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0, p = i;
      while (p < haystack.length && j < needle.length) {
        if (haystack[p] === needle[j]) {
          p += 1;
          j += 1;
        } else {
          break;
        }
      }
      if (j === needle.length) return i;
    }
  }
  return -1;
};
// @lc code=end

