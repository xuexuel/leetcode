/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function (n) { 
  let arr = new Array(n + 1).fill(true)
  for (let i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (let j = i*i; j < n; j+=i) {
        arr[j] = false
      }
    }
  }
  let count=0
  for (let i = 2; i < n; i++) {
    if(arr[i]) count++
  }
  return count
}
// @lc code=end

