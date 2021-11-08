/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
  let arr = [];
  for (let i = 0; i <= s.length - 1; i++) {
    let str = s[i]
    if (arr.includes(str)) continue;
    while (arr.length > 0 && arr[arr.length - 1] > str && s.indexOf(arr[arr.length - 1], i) > i) {
      arr.pop()
    }
    arr.push(str)
  }
  return arr.join("")
};
// @lc code=end

