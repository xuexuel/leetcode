/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/\W/g, '').replace(/_/g, '');
  console.log(s)
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) {
      if (typeof s[i] === 'string' && typeof s[j] === 'string' && s[i].toLocaleLowerCase() === s[j].toLocaleLowerCase()) continue;
      return false;
    }
  }
  return true;
};
// @lc code=end

