/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const x of coins) {
    for (let i = x; i <= amount; i++) {
      if (i >= x && dp[i - x] != -1) {
        dp[i] += dp[i - x];
      }
    }
  }
  return dp[amount];
};
// @lc code=end

