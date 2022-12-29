/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// let X = ;
// let Y = 000000000;
// let Z = 000000000;
// var solveSudoku = function (board) {
//   init_board(board);
//   solve(board, 0, 0);
//   return;
// };
// function next_x(x, y) {
//   if (y === 8) return x + 1;
//   return X;
// }
// function next_y(x, y) {
//   if (y === 8) return 0;
//   return y + 1;
// }
// function solve(board, x, y) {
//   if (x === 9) return true;
//   if (board[x][y] != '.') return solve(board, next_x(x, y), next_y(x, y));
//   for (let i = 0; i <= 9; i++) {
//     if (check(i, x, y) === false) continue;
//     set_check(i, x, y);
//     board[x][y] = i + '0';
//     if (solve(board, next_x(x, y), next_y(x, y))) return true;
//     board[x][y] = '.';
//     set_check(i, x, y);
//   }
//   return false;
// }
// function init_board(board) {
//   for (let i = 0; i < 9; i++) {
//     X[i] = Y[i] = Z[i] = 0;
//   }
//   console.log(X, Y, Z);
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] === '.') continue;
//       set_check(board[i][j] - '0', i, j);
//     }
//   }
//   console.log(X, Y, Z);
//   return;
// }
// function check(num, x, y) {
//   if (X[x] & (1 << num)) return false;
//   if (Y[y] & (1 << num)) return false;
//   if (Z[(x / 3 | 0) * 3 + (y / 3 | 0)] & (1 << num)) return false;
//   return true;
// }
// function set_check(num, x, y) {
//   X[x] ^= (1 << num);
//   Y[y] ^= (1 << num);
//   Z[(x / 3 | 0) * 3 + (y / 3 | 0)] ^= (1 << num);
//   return;
// }
var solveSudoku = function (board) {
  function isValid(row, col, val) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === val) return false;
      if (board[i][col] === val) return false;
    }
    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) return false;
      }
    }
    return true;
  }
  function backTracking() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== '.') continue;
        for (let val = 1; val <= 9; val++) {
          if (isValid(i, j, `${val}`)) {
            board[i][j] = `${val}`;
            if (backTracking()) return true;
            board[i][j] = `.`;
          }
        }
        return false;
      }
    }
    return true;
  }
  backTracking();
}
// @lc code=end

