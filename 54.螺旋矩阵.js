/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let stack = [];
  // n行
  let n = matrix.length;
  // m列
  let m = matrix[0].length;
  for (let i = 0, j = -1, k = 0, l = 0, K = m * n; k < K; l += 1) {
    while (k < K && j + 1 <= m - 1 - l) {
      k += 1;
      j += 1;
      console.log(matrix[i][j]);
      stack.push(matrix[i][j]);
    }
    while (k < K && i + 1 <= n - 1 - l) {
      k += 1;
      i += 1;
      console.log(matrix[i][j]);
      stack.push(matrix[i][j]);
    }
    while (k < K && j - 1 >= l) {
      k += 1;
      j -= 1;
      console.log(matrix[i][j]);
      stack.push(matrix[i][j]);
    }
    while (k < K && i - 1 > l) {
      k += 1;
      i -= 1;
      console.log(matrix[i][j]);
      stack.push(matrix[i][j]);
    }
  }
  return stack;
};
// @lc code=end

