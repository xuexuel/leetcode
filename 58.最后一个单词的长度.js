/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let temp = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (temp === 0 && s[i] === ' ') continue;
    if (s[i] !== ' ') {
      temp += 1;
    } else {
      return temp;
    }
  }
  return temp;
};
// @lc code=end

