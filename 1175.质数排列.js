/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
  let MOD = 10 ** 9 + 7;
  function A(n, m) {
    return (m === 0 ? 1 : A(n, m - 1) * (n - m + 1)) % MOD;
  }
  function su(a) {
    if (a < 2) return false;
    if (a === 2) return true;
    for (let i = 2; i < a; i++) {
      if (a % i === 0) return false;
    }
    return true;
  }
  function multi(a, b) {
    //将b拆成2部分
    let t = Math.floor(b / 100000),
      t2 = b % 100000
    let sum = 0
    for (let i = 0; i < t; i++) {
      sum = (sum + 100000 * a) % MOD
    }
    sum = (sum + t2 * a) % MOD
    return sum
  }
  let numSu = 0;
  for (let i = 1; i <= n; i++) {
    if (su(i)) {
      numSu++;
    }
  }
  let a = A(numSu, numSu);
  let b = A(n - numSu, n - numSu);

  return multi(a,b); 
};
// @lc code=end

