/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
// var isValidSerialization = function (preorder) {
//   let arr = preorder.split(',');
//   let stack = [];
//   for (let i = 0; i < arr.length; i++) {
//     stack.push(arr[i]);
//     while (stack.length > 2 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
//       stack.pop();
//       stack.pop();
//       stack.pop();
//       stack.push('#');
//     }
//   }
//   return stack.length === 1 && stack[0] === '#';
// };
var isValidSerialization = function (preorder) {

}
// @lc code=end

