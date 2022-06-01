/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  if (haystack === '') return -1;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 0, p = i;
      while (p < haystack.length && j < needle.length) {
        if (haystack[p] === needle[j]) {
          p += 1;
          j += 1;
        } else {
          break;
        }
      }
      if (j === needle.length) return i;
    }
  }
  return -1;
};
// var strStr = function (haystack, needle) {
//   let ind = new Array(128).fill(-1);
//   for (let i = 0; needle[i]; i++) {
//     ind[needle[i]] = i;
//   }
//   let i = 0;
//   while (i + needle.length <= haystack.length) {
//     let flag = 1;
//     for (let j = 0; needle[j]; j++) {
//       if (haystack[i + j] != needle[j]) {
//         flag = 0;
//         break;
//       }
//     }
//     if (flag) return i;
//     i += (needle.length - ind[haystack[i + needle.length]]);
//   }
//   return -1;
// }
// @lc code=end

