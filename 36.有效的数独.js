/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let row = new Array(9),column = new Array(9),area = new Array(9);
  for (let i = 0; i < 9; i++) {
    row[i] = new Array();
    column[i] = new Array();
    area[i] = new Array();
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const item = board[i][j];
      if (item != '.') {
        if (row[j].includes(item)) return false;
        if (column[i].includes(item)) return false;
        let area_i = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (area[area_i].includes(item)) return false;
        row[j].push(item);
        column[i].push(item);
        area[area_i].push(item);
      }
    }
  }
  return true;
};
// @lc code=end

