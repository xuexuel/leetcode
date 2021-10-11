/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// var validateStackSequences = function (pushed, popped) {
//   let stack = [];
//   while (popped.length > 0) {
//     if (stack.length !== 0 && stack[stack.length - 1] === popped[0]) {
//       stack.pop();
//       popped.shift();
//     } else if (pushed.length !== 0) {
//       stack.push(pushed.shift());
//     } else {
//       return false;
//     }
//   }
//   return true;
// };
var validateStackSequences = function (pushed, popped) {
  let arr = [];
  while (popped.length > 0) {
    if (popped.length !== 0 && arr[arr.length - 1] === popped[0]) {
      arr.pop();
      popped.shift();
    } else if (pushed.length !== 0) {
      arr.push(pushed.shift());
    } else {
      return false;
    }
  }
  return arr.length === 0;
}

// @lc code=end

