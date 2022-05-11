/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   let i = 0, j = 1,cnt=0;
//   while (j < s.length) {
//     if (s[i] === s[j]) {
//       i++;
//       j++;
//       cnt = 1;
//     } else {
//       j++
//     }
//   }
//   return cnt;
// };

var lengthOfLongestSubstring = function (s) {
  let window = {};
  let left = 0, right = 0, res = 0;
  while (right < s.length) {
    let c = s[right];
    right++;
    window[c] = (window[c] || 0) + 1;
    while (window[c] > 1) {
      let d = s[left];
      left++;
      window[d]--;
    }
    res = Math.max(res, right - left);
  }
  return res;
};


// @lc code=end

