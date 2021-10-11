/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  s = Array.from(s);
  let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (arr.includes(s[i]) && arr.includes(s[j])) {
      [s[i], s[j]] = [s[j], s[i]];
      continue;
    }
    if (arr.includes(s[i])) i -= 1;
    if (arr.includes(s[j])) j += 1;

  }
  return s.join('');
};
// @lc code=end

