/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var longestValidParentheses = function (s) {
//   if (s == '') return 0;
//   let ans = 0, dp = new Array(s.length).fill(0);
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] != '(') {
//       if (s[i - 1] == '(') {
//         if (i - 2 >= 0) {
//           dp[i] = dp[i - 2] + 2;
//         } else {
//           dp[i] = 2;
//         }
//       } else {
//         let j = i - dp[i - 1] - 1;
//         if (j >= 0 && s[j] != ')') {
//           dp[i] = dp[i - 1] + 2 + dp[j - 1];
//         }
//       }
//       ans = Math.max(ans, dp[i]);
//     }
//   }
//   return ans;
// };


var longestValidParentheses = function (s) {
  let max = 0
  if (s.length < 1) return max
  let len = s.length
  // 栈顶之所有加入一个-1,纯粹是为了方便计算有效括号的长度
  // 不然就需要手动调整为i-j+1;同时而确保第一个字符为")"时不需要特殊处理
  let stack = [-1]
  for (let i = 0; i < len; i++) {
    let value = s[i]
    if (value === '(') {
      stack.push(i)
    } else if (value === ')') {
      stack.pop()
      // 栈顶加入一个pivot字符")",实际上是方便计算有效括号串长度
      if (stack.length < 1) {
        stack.push(i)
      } else {
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }
  return max
};
// @lc code=end

