/*
 * @lc app=leetcode.cn id=793 lang=javascript
 *
 * [793] 阶乘函数后 K 个零
 */

// @lc code=start
var trailingZeroes = function (n) {
  let res = n;
  for (let d = n; d / 5 > 0; d = d / 5) {
    res += Math.floor(d / 5);
  }
  return res;
};
/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function (k) {
  let min = 0,
    max = k + 1;
  // 左闭右开
  while (min < max) {
    let mid = min + ((max - min) >> 1);
    let count = trailingZeroes(mid);
    if (count > k) {
      max = mid;
    } else if (count < k) {
      min = mid + 1;
    } else {
      return 5;
    }
  }
  return 0;
};
// @lc code=end

