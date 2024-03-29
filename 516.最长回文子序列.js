/*
 * @lc app=leetcode.cn id=516 lang=javascript
 *
 * [516] 最长回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindromeSubseq = function(s) {
//   let n = s.length;
//   let dp = new Array(n);
//   for (let i = 0; i < n; i++){
//     dp[i] = new Array(n).fill(0);
//     dp[i][i] = 1;
//   }
//   for (let i = n - 2; i >= 0; i--){
//     for (let j = i + 1; j < n; j++){
//       if (s[i] == s[j]) {
//         dp[i][j] = dp[i + 1][j - 1] + 2;
//       } else {
//         dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
//       }
//     }
//   }
//   return dp[0][n - 1];
// };

// 状态压缩
var longestPalindromeSubseq = function (s) { 
  let n = s.length;
  let dp = new Array(n).fill(1);
  for (let i = n - 2; i >= 0; i--){
    let pre = 0;
    for (let j = i + 1; j < n; j++){
      let temp = dp[j];
      if (s[i] == s[j]) {
        dp[j] = pre + 2;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      pre = temp;
    }
  }
  return dp[n - 1];
}
// @lc code=end

