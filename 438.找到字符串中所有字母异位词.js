/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = {}, window = {};
  for (let a of p) {
    need[a] = (need[a] || 0) + 1;
  }
  let left = 0, right = 0, valid = 0, res = [];
  while (right < s.length) {
    let c = s[right];
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        valid++;
      }
    }
    right++;
    while (right - left >= p.length) {
      if (valid == Object.keys(need).length) {
        res.push(left);
      }
      let c = s[left];
      if (need[c]) {
        if (window[c] == need[c]) {
          valid--;
        }
        window[c]--;
      }
      left++

    }
  }
  return res;
};
// @lc code=end

