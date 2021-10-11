/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// !总结：Math.floor(x / 10)向上取整  适用于正数
// !Math.ceil(x / 10);向下取整 适用于负数
var reverse = function (x) {
  const MAX = Math.pow(2, 31) - 1;
  const MIN = -Math.pow(2, 31);
  let res = 0;
  let simple = (x >= 0);
  while (x) {
    let pop = x % 10;
    if (res > MAX / 10 || (res == MAX / 10 && pop > MAX % 10)) return 0;
    if (res < MIN / 10 || (res == MIN / 10 && pop < MIN % 10)) return 0;
    if (simple) {
      x = Math.floor(x / 10);
    } else {
      x = Math.ceil(x / 10);
    }
    res = res * 10 + pop;

  }
  return res;
};

// *先转化为字符串，再转成数字
// var reverse = function (x) {
//   let arr = x.toString().split('');
//   let simple = false;
//   let res = 0;
//   const INT = Math.pow(2, 31);
//   if (arr[0] === '-') {
//     simple = true;
//     arr.shift();
//   }
//   for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     let item = arr[i];
//     arr[i] = arr[j];
//     arr[j] = item;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i].toString();
//     res += item;
//   }
//   res = Number(res);
//   if (simple) {
//     if (res > INT) return 0;
//     return -res;
//   } else {
//     if (res > INT - 1) return 0;
//     return res;
//   }
// };
// @lc code=end

