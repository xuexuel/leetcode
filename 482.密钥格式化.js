/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  let str = s.split('-').join('');
  let first = str.length % k !== 0 ? str.length % k : k;
  let ret = '',temp = 0;
  for (let i = 0; i < str.length; i++) {
    let com = str[i],cnt = first <= 0 ? k : first;
    if (isNaN(com)) com = com.toUpperCase();
    if (temp < cnt) {
      ret += com;
      temp++;
    }
    if (temp === cnt) {
      temp = 0;
      ret += '-';
      first = -1;
    }
  }
  return ret.substr(0, ret.length - 1);
};
// @lc code=end

