/*
 * @lc app=leetcode.cn id=921 lang=javascript
 *
 * [921] 使括号有效的最少添加
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let res = 0, need = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(') {
      res++;
    } else {
      res--;
      if (res == -1) {
        need++;
        res++;
      }
    }
  }
  return res + need;
};
// @lc code=end

