/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function (s) {
//   const map = new Map();
//   s.split('').forEach((item) => {
//     map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
//   })
//   let arr = Array.from(map);
//   arr.sort((a, b) => b[1] - a[1]);
//   let res = '';
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i][1]; j++) {
//       res += arr[i][0];
//     }
//   }
//   return res;
// };
var frequencySort = function (s) {

}
// @lc code=end

