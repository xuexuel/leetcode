/*
 * @lc app=leetcode.cn id=1359 lang=javascript
 *
 * [1359] 有效的快递序列数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countOrders = function(n) {
  if (n == 1) return 1;
  let ans = 1;
  for (let i = 2; i <= n; i++) {
      ans = ans * (i * 2 - 1) * i % 1000000007;
  }
  return ans;
};
// @lc code=end

