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
// var superPow = function (a, b) {
//   const MOD = BigInt(1337);
//   const pow = (x, n) => {
//     let res = BigInt(1);
//     while (n !== 0) {
//       if (n % 2 !== 0) {
//         res = res * BigInt(x) % MOD;
//       }
//       x = x * x % MOD;
//       n = Math.floor(n / 2);
//     }
//     return res;
//   }
//   let ans = 1;
//   for (const e of b) {
//     ans = pow(BigInt(ans), 10) * pow(BigInt(a), e) % MOD;
//   }
//   return ans;
// };
let base = 1337;
var superPow = function (a, b) {
  if (b.length == 0) return 1;
  let last = b.pop();
  let part1 = mypow(a, last);
  let part2 = mypow(superPow(a, b), 10);
  return (part1 * part2) % base;
}
var mypow = function (a, k) {
  if (k == 0) return 1;
  a %= base;
  if (k % 2 == 1) {
    return (a * mypow(a, k - 1)) % base;
  } else {
    let sub = mypow(a, k / 2);
    return (sub * sub) % base;
  }
}
// @lc code=end

