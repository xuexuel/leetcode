/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let count = 0;
  let reg = new RegExp("[" + allowed + "]", 'g');
  for (let item of words) {
    if (item.replace(reg, '').length === 0) count++;
  }
  return count;
};
// @lc code=end

