/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const match = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])
  let arr = s.split('');
  let res = 0, temp = 0;
  for (let i = 0, pre = 0; i < arr.length; i++) {
    const item = match.get(arr[i]);
    if (pre === 0 || pre === item) {
      temp = temp + item;
    } else if (pre < item) {
      res = res + (item - temp);
      temp = 0;
    } else if (pre > item) {
      res = res + temp;
      temp = item;
    }
    pre = item;
  }
  return res + temp;
};
// @lc code=end

