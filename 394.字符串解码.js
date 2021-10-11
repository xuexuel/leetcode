/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let numStack = [];
  let strStack = [];
  let num = 0;
  let result = '';
  for (const item of s) {
    if (!isNaN(item)) {
      num = num * 10 + Number(item);
    } else if (item === '[') {
      strStack.push(result);
      result = '';
      numStack.push(num);
      num = 0;
    } else if (item === ']') {
      let repeatTimes = numStack.pop();
      result = strStack.pop() + result.repeat(repeatTimes);
    } else {
      result += item;
    }
  }
  return result;
};
// @lc code=end

