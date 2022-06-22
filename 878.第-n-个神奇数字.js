/*
 * @lc app=leetcode.cn id=878 lang=javascript
 *
 * [878] 第 N 个神奇数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  const gcd = (a, b) => {
    if (b) return gcd(b, a % b);
    return a;
  }

  const MOD = 1000000007;
  const L = a / gcd(a, b) * b;
  const M = L / a + L / b - 1;
  const q = Math.trunc(n / M), r = n % M;

  let ans = q * L % MOD;
  if (r == 0)
    return ans;

  let heads = [a, b];
  for (let i = 0; i < r - 1; ++i) {
    if (heads[0] <= heads[1])
      heads[0] += a;
    else
      heads[1] += b;
  }

  ans += Math.min(heads[0], heads[1]);
  return ans % MOD;
};
// @lc code=end

