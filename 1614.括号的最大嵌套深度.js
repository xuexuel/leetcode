/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let stack = [];
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item == '(') {
      stack.push('(');
    } else if (item == ')') {
      num = Math.max(num, stack.length);
      stack.pop();
    }
  }
  return num;
};
// @lc code=end

