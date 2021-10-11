/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0, j = 1,cnt=0;
  while (j < s.length) {
    if (s[i] === s[j]) {
      i++;
      j++;
      cnt = 1;
    } else {
      j++
    }
  }
  return cnt;
};
// @lc code=end

