/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let arr = [];
  arr.push(1);
  arr.push('*');
  for (let i = 2; i <= n; i++) {
    cnt = 0,cur=null;
    while (arr.length > 0 && cur !== '*') {
      let temp = arr.shift();
      if (!cur) {
        cur = temp;
        cnt = 1;
      } else if (temp === cur) {
        cnt++;
      } else {
        arr.push(cnt);
        arr.push(cur);
        cnt = 1;
        cur = temp;
      }
    }
    arr.push('*');
  }
  return arr.join('').substring(0, arr.length - 1);
};
// @lc code=end

