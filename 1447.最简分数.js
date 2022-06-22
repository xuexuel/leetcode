/*
 * @lc app=leetcode.cn id=1447 lang=javascript
 *
 * [1447] 最简分数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function(n) {
  const gcd = (a, b) => {
    if (b) return gcd(b, a % b);
    return a;
  }
  const ans = [];
  for (let i = 2; i <= n; ++i) {
      for (let j = 1; j < i; ++j) {
          if (gcd(j, i) == 1) {
              ans.push(j + "/" + i);
          }
      }
  }
  return ans;
};
// @lc code=end

