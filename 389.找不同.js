/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let ret = 0;
  for (let x of s) {
    ret ^= x.charCodeAt();
  }
  for (let y of t) {
    ret ^= y.charCodeAt();
  }
  return String.fromCharCode(ret);
};
// @lc code=end

