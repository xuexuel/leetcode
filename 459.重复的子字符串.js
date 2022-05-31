/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let n = s.length, j = -1;
  let next = new Array(n);
  next[0] = -1;
  for (let i = 1; i < s.length; i++) {
    while (j != -1 && s[j + 1] != s[i]) j = next[j];
    if (s[j + 1] == s[i]) j++;
    next[i] = j;    
  }
  return (next[n - 1] != -1) && (n % (n - (next[n - 1] + 1)) == 0);
};
// @lc code=end

