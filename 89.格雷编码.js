/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let ret = new Array(1 << n);
  if (n == 0) {
    ret[0] = 0;
    return ret;
  }
  let code_n_1 = grayCode(n - 1);
  let len_n_1 = code_n_1.length;
  for (let i = 0; i < len_n_1; i++){
    ret[i] = code_n_1[i] << 1;
    ret[2 * len_n_1 - i - 1] = code_n_1[i] << 1 | 1;
  }
  return ret;
};
// @lc code=end

