/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let ret = '';
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    if (code <= 90 && code >= 65) {
      ret += String.fromCharCode(code + 32);
    } else {
      ret += s[i];
    }
  }
  return ret;
};
// @lc code=end

