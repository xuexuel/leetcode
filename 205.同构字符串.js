/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let objs = {}, objt = {};
  for (let i = 0; i < s.length; i++) {
    if (objs[s[i]]) {
      if (objs[s[i]] != t[i]) return false;
    } else {
      objs[s[i]] = t[i];
    }
    if (objt[t[i]]) {
      if (objt[t[i]] != s[i]) return false;
    } else {
      objt[t[i]] = s[i];
    }
  }
  return true;
};
// @lc code=end

