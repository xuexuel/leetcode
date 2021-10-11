/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 先将第一项放进比较数组
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let s1 = strs[0].split('');
  let i = 1;
  while (s1.length > 0 && i < strs.length) {
    let item = strs[i].split('');
    let j = 0;
    while (s1.length >= j) {
      if (!item[j]) {
        s1.splice(j, s1.length - j);
      } else if (item[j] !== s1[j]) {
        s1.splice(j, s1.length - j);
      }
      j++;
    }
    console.log(i);
    i++;
  }

  // 将数组中的值转成字符串
  let res = '';
  while (s1.length > 0) {
    res += s1.shift();
  }
  return res;
};
// @lc code=end

