/*
 * @lc app=leetcode.cn id=2027 lang=javascript
 *
 * [2027] 转换字符串的最少操作次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
  let index_left = -1;
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'X') {
      if (index_left == -1) {
        index_left = i;
      } else if (i - index_left > 2) {
        num++;
        index_left = i;
      } else if (i - index_left == 2) {
        num++;
        index_left = -1;
      }
    }
  }
  return index_left == -1 ? num : num + 1;
};
// @lc code=end

