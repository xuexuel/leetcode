/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
// var topKFrequent = function (words, k) {
//   let map = new Map();
//   words.forEach(item => {
//     map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
//   })
//   let arr = Array.from(map);
//   arr.sort((a, b) => {
//     if (b[1] !== a[1]) {
//       return b[1] - a[1];
//     } else {
//       return a[0] > b[0] ? 1 : -1;
//     }
//   });
//   let res = [];
//   for (let i = 0; i < k; i++) {
//     res.push(arr[i][0]);
//   }
//   return res;
// }
var topKFrequent = function (words, k) {

}
// @lc code=end

