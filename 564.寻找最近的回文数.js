/*
 * @lc app=leetcode.cn id=564 lang=javascript
 *
 * [564] 寻找最近的回文数
 */

// @lc code=start
/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function (n) {
  let big = change(Number(n) + 1);
  console.log(big);
  let small = change(Number(n) - 1);
  console.log(small);
  let res = 0;
  if (judge(n)) {
    if (Math.abs(n - big) === Math.abs(n - small)) return small > big ? big.toString() : small.toString();
    res = Math.abs(n - big) > Math.abs(n - small) ? small : big;
  } else {
    let cur = change(Number(n));
    let x = Math.abs(n - big), y = Math.abs(n - cur), z = Math.abs(n - small);
    let arr = [];
    arr.push([x, big]);
    arr.push([y, cur]);
    arr.push([z, small]);
    arr.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      else return a[0] - b[0];
    })
    console.log(arr);
    res = arr[0][1];
  }
  return res.toString();
};
function judge(n) {
  let temp = n;
  for (let i = 0, j = temp.length - 1; i < j; i++, j--) {
    if (temp[i] !== temp[j]) return false;
  }
  return true;
}
function change(n) {
  let temp = n.toString().split('');
  for (let i = 0, j = temp.length - 1; i < j; i++, j--) {
    if (temp[i] !== temp[j]) {
      temp[j] = temp[i];
    }
  }
  return Number(temp.join(''));
}
// @lc code=end

