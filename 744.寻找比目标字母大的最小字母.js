/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// var nextGreatestLetter = function(letters, target) {
//   for (let i = 0; i < letters.length; i++) {
//     if (target < letters[i]) {
//       return letters[i]; 
//     }
//   }
//   return letters[0];
// };

// 二分算法
var nextGreatestLetter = function (letters, target) {
  const diff = (i, j) => {
    if (i == j) {
      return letters[i];
    }
    let mid = (i + j) >> 1;
    if (letters[mid] > target) {
      return diff(i, mid);
    } else if(letters[mid] <= target){
      return diff(mid + 1, j);
    }
  }
  let res = diff(0, letters.length - 1);
  return res > target ? res : letters[0];
};
// @lc code=end

