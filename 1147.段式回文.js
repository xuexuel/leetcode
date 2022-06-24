/*
 * @lc app=leetcode.cn id=1147 lang=javascript
 *
 * [1147] 段式回文
 */

// @lc code=start
/**
 * @param {string} text
 * @return {number}
 */
var longestDecomposition = function (text) {
  let res = 0;
  let sum = 0; // 已经清算的长度
  let l = 0; // 左边界
  let r = text.length; // 右边界
  let lenL = l + 1; // 左边界的窗口区右边界
  let lenR = r - 1; // 右边界的窗口区左边界
  const d = Math.floor(text.length / 2) + 1;
  while (l < r && lenL < d) {
    while (lenL < d) {
      if (text.slice(l, lenL) !== text.substring(lenR, r)) {
        lenL++;
        lenR--;
      } else {
        l = lenL;
        r = lenR;
        lenL = l + 1;
        lenR = r - 1;
        res += 2;
        sum = l * 2;
        break;
      }
    }
  }

  return sum < text.length ? res + 1 : res;
};
// @lc code=end

