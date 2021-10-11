/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */


// var pancakeSort = function (arr) {
//   let ind = new Array(arr.length + 1), ret = [];
//   for (let i = 0; i < arr.length; i++) ind[arr[i]] = i;
//   for (let i = arr.length; i >= 1; i--) {
//     if (ind[i] === i - 1) continue;
//     if (ind[i] !== 0) {
//       ret.push(ind[i] + 1);
//       reverse(arr, ind[i] + 1, ind);
//     }
//     if (i !== 1) {
//       ret.push(i);
//       reverse(arr, i, ind);
//     }
//   }
//   return ret;
// };

// function reverse(arr, n, ind) {
//   for (let i = 0, j = n - 1; i < j; i++, j--) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     ind[arr[i]] = i;
//     ind[arr[j]] = j;
//   }
// }


var pancakeSort = function (arr) {

}
// @lc code=end

