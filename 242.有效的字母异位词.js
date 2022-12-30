/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//   return s.length == t.length && [...s].sort().join('') === [...t].sort().join('')
// };
var isAnagram = function(s, t) {
  if (s.length != t.length) return false;
  let objs = {}, objt = {};
  for (let i = 0; i < s.length; i++) {
    if (objs[s[i]]) {
      objs[s[i]]++;
    } else {
      objs[s[i]] = 1;
    }
    if (objt[t[i]]) {
      objt[t[i]]++;
    } else {
      objt[t[i]] = 1;
    }
  }
  for (const key in objs) {
    if (!objs[key] || !objt[key] || objs[key] != objt[key]) {
      return false;
    }
  }
  for (const key in objt) {
    if (!objs[key] || !objt[key] || objs[key] != objt[key]) {
      return false;
    }
  }
  return true;
};
// @lc code=end

