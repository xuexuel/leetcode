/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
// var partitionLabels = function(s) {
//   const last = new Array(26);
//   const codePointA = 'a'.codePointAt(0);
//   for (let i = 0; i < s.length; i++){
//     last[s.codePointAt(i) - codePointA] = i;
//   }
//   const partition = [];
//   let start = 0, end = 0;
//   for (let i = 0; i < s.length; i++){
//     end = Math.max(end, last[s.codePointAt(i) - codePointA]);
//     if (i == end) {
//       partition.push(end - start + 1);
//       start = end + 1;
//     }
//   } return partition;
// };

var partitionLabels = function (s) {
  let last = new Array(26);
  let codeA = 'a'.codePointAt(0);
  for (let i = 0; i < s.length; i++) {
    last[s.codePointAt(i) - codeA] = i;
  }
  let arr = [];
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s.codePointAt(i) - codeA]);
    if (end === i) {
      arr.push(end - start + 1);
      start = end+1;
    }
  }
  return arr;
}
// @lc code=end

