/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let arr = path.split('/');
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item === '..') {
      stack.pop();
    } else if (item !== '.' && item) {
      stack.push(item);
    }
  }
  return '/' + stack.join('/');
};
// @lc code=end

