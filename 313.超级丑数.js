/*
 * @lc app=leetcode.cn id=313 lang=javascript
 *
 * [313] 超级丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function (n, primes) {
  const res = [1];
  const points = new Array(primes.length).fill(0);
  let min, map;
  for (let i = 1; i < n; i++) {
    map = primes.map((prime, index) => res[points[index]] * prime)
    min = Math.min.apply(null, map);
    primes.forEach((prime, index) => {
      if (map[index] === min) points[index]++;
    })
    res.push(min);
  }
  return res[n - 1];
};
// @lc code=end

