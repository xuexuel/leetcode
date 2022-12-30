/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = [], text = 0;
  let a_len = a.length, b_len = b.length;
  let len = Math.max(a_len, b_len);
  a = a.split('').reverse();
  b = b.split('').reverse();
  for (let i = 0; i < len; i++) {
    let temp = 0;
    if (i >= a_len) {
      temp = Number(b[i]) + text;
    } else if (i >= b_len) {
      temp = Number(a[i]) + text;
    } else {
      temp = Number(a[i]) + Number(b[i]) + text;
    }
    if (temp >= 2) {
      res.push(temp - 2);
      text = 1;
    } else {
      res.push(temp);
      text = 0;
    }
  }
  if (text) res.push(text);
  return res.reverse().join('');
};
// @lc code=end

