/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  if (s.length < 2 ) return s.length;
  let count = 0;
  let arr = s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt());
  for (let i = 1; i < arr.length; i+=2) {
    if (arr[i] === arr[i - 1]) count += 2;
    else i--;
  }
  return Math.min(count + 1, s.length);
};
// @lc code=end

