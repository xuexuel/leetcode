/*
 * @lc app=leetcode.cn id=1884 lang=javascript
 *
 * [1884] 鸡蛋掉落-两枚鸡蛋
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
  const dp = Array(n + 1)
      .fill(0)
      .map((_) => Array(3).fill(0));
    let m = 0;
    while (dp[m][2] < n) {
      m++;
      for (let l = 1; l <= 2; ++l) {
        dp[m][l] = dp[m - 1][l - 1] + dp[m - 1][l] +1;
      }
    }
    return m;
};
// @lc code=end

