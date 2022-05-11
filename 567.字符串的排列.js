/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let need = {};
  let window = {};
  for (let a of s1) {
    need[a] = (need[a] || 0) + 1;
  }
  let valid = 0, left = 0, right = 0;
  while (right < s2.length) {
    let c = s2[right];
    right++;
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        valid++;
      }
    }
    while (right - left >= s1.length) {
      if (valid == Object.keys(need).length) {
        return true;
      }
      let c = s2[left];
      left++;
      if (need[c]) {
        if (window[c] == need[c]) {
          valid--;
        }
        window[c]--;
      }
    }
  }
  return false;
};
// @lc code=end

