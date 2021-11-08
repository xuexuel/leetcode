/*
 * @lc app=leetcode.cn id=395 lang=javascript
 *
 * [395] 至少有 K 个重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const n = s.length;
  return dfs(s, k);
};

const dfs = (s, k) => {
  if (!s) return 0;
  const cnt = new Array(26).fill(0);
  for (const ch of s) {
    cnt[ch.charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (let i = 0; i < 26; i++){
    if (cnt[i] && cnt[i] < k) {
      const tokens = s.split(String.fromCharCode(i + 'a'.charCodeAt()))
      let ret = 0;
      for (const token of tokens) {
        const len = dfs(token, k)
        ret = Math.max(len, ret)
      }
      return ret;
    }
  }
  return s.length;
};
// @lc code=end

