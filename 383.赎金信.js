/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let arr = [...magazine];
  for (let i = 0; i < ransomNote.length; i++) {
    if (arr.includes(ransomNote[i])) {
      arr.splice(arr.indexOf(ransomNote[i]), 1);
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

