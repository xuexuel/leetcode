/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
  if (s.length < 11) return [];
  let n = s.length, map = new Map(), left = 0, right = 10, res = [];
  while (right <= n) {
    let cur = s.substring(left, right);
    map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);
    left++;
    right++;
  }
  for (let [k, v] of map) {
    if (v > 1) res.push(k);
  }
  return res;
};
// @lc code=end

