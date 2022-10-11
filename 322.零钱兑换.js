/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(-1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin && dp[i - coin] != -1) {
        if (dp[i] == -1 || dp[i] > dp[i - coin] + 1) dp[i] = dp[i - coin] + 1;
      } 
    }
  }
  return dp[amount];
}

// *暴力递归  时间超限
// var coinChange = function (coins, amount) {
//   const dp = (n) => {
//     if (n == 0) return 0;
//     if (n < 0) return -1;
//     let res = Infinity;
//     for (const item of coins) {
//       let subproblem = dp(n - item);
//       if (subproblem == -1) continue;
//       res = Math.min(res, 1 + subproblem);
//     }
//     return res == Infinity ? -1 : res;
//   }
//   return dp(amount)
// }
// @lc code=end

