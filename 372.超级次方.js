/*
 * @lc app=leetcode.cn id=372 lang=javascript
 *
 * [372] 超级次方
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function (a, b) {
  const MOD = BigInt(1337);
  const pow = (x, n) => {
    let res = BigInt(1);
    while (n !== 0) {
      if (n % 2 !== 0) {
        res = res * BigInt(x) % MOD;
      }
      x = x * x % MOD;
      n = Math.floor(n / 2);
    }
    return res;
  }
  let ans = 1;
  for (const e of b) {
    ans = pow(BigInt(ans), 10) * pow(BigInt(a), e) % MOD;
  }
  return ans;
};
// @lc code=end

