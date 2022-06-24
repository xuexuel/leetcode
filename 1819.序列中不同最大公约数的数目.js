/*
 * @lc app=leetcode.cn id=1819 lang=javascript
 *
 * [1819] 序列中不同最大公约数的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countDifferentSubsequenceGCDs = function (nums) {
  let gcd = (x, y) => !y ? x : gcd(y, x % y)
  let mx = Math.max(...nums)
  let vis = Array(mx + 1).fill(0)
  let c = Array(mx + 1).fill(0)
  for (let v of nums) vis[v]++
  for (let i = 1; i <= mx; ++i) {
    let tot = 0
    for (let j = 1; j * i <= mx; ++j) tot += vis[j * i]
    c[i] = tot
  }
  let ans = 0
  for (let i = 1; i <= mx; ++i) {
    let fl = c[i] > 0
    if (!fl) continue
    for (let j = 2; j * i <= mx; ++j) {
      if (c[i] <= c[j * i]) {
        fl = false
        break
      }
    }
    ans += fl
  }
  return ans
};
// @lc code=end

