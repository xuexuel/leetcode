/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
  let lens = [], masks = [];
  for (let i = 0; i < words.length; i++) {
    lens.push(words[i].length);
    let mask = 0;
    for (let j = 0; j < words[i].length; j++) {
      mask |= 1 << (words[i][j].charCodeAt(0) - 'a'.charCodeAt(0));
    }
    masks.push(mask);
  }
  let max = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((masks[i] & masks[j]) == 0) {
        max = Math.max(max, lens[i] * lens[j]);
      }
    }
  }
  return max;
};
// @lc code=end

