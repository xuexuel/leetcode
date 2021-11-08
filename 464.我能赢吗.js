/*
 * @lc app=leetcode.cn id=464 lang=javascript
 *
 * [464] 我能赢吗
 */

// @lc code=start
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
  if (maxChoosableInteger >= desiredTotal) return true;
  var sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2;
  if (desiredTotal > sum) return false;
  var dp = {};
  function f(total, state) {
    if (dp[state] !== undefined) return dp[state];
    for (var i = 1; i <= maxChoosableInteger; i++) {
      var curr = 1 << i;
      if (curr & state) continue;
      if (i >= total) return dp[state] = true;
      if (!f(total - i, state | curr)) return dp[state] = true;
    }
    return dp[state] = false;
  }
  return f(desiredTotal, 0);
};
// @lc code=end

