/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let arr = word.split('');
  let type = false;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (i === 0) {
      if (item === item.toLowerCase()) type = true;
    } else if (i === 1) {
      if (type && item === item.toUpperCase()) return false;
      if (item === item.toLowerCase()) type = true;
    } else {
      if (type && item === item.toUpperCase()) return false;
      if (!type && item === item.toLowerCase()) return false;
    }
  }
  return true;
};
// @lc code=end

