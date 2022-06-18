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
  let arr = new Array(n + 1).fill(1);
  for (let i = 2; i * i < n; i++) {
    if (arr[i]) {
      for (let j = i * i; j < n; j += i) {
        arr[j] = 0;
      }
    }
  }
  let count = 0;
  for (let i = 2; i < n; i++) {
    count += (arr[i] == 1)
  }
  return count;
};
// @lc code=end

