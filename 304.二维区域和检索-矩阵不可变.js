/*
 * @lc app=leetcode.cn id=304 lang=javascript
 *
 * [304] 二维区域和检索 - 矩阵不可变
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  let m = matrix.length, n = matrix[0].length;
  if (m == 0 || n == 0) return;
  // 构造前缀和矩阵
  preSum = Array.from(new Array(m+1),()=>{return new Array(n+1).fill(0)})
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          // 计算每个矩阵 [0, 0, i, j] 的元素和
          preSum[i][j] = preSum[i-1][j] + preSum[i][j-1] + matrix[i- 1][j - 1] - preSum[i-1][j-1];
      }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
// ⽬标矩阵之和由四个相邻矩阵运算获得
    return preSum[row2+1][col2+1] - preSum[row1][col2+1] - preSum[row2+1][col1] +preSum[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end

