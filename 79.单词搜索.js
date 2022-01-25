/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let wordList = word.split('');
  let k = 0;
  for (let i = 0; i < board.length; i++){
    for (let j = 0; j < board[i].length; j++) {
      const item = board[i][j];
      if (item == wordList[i]) {
        if (this.checkWord(board,word, k,i,j)) return true;
      } else {
        k = 0;
      }
    }
  }
  return false;
};
var checkWord = function (board, word, k, i, j) {
  let m = board.length, n = board[0].length;
  while (word.length > i) {
    let i_top = i - 1, i_bottom = i + 1, j_left = j - 1, j_right = j + 1;
    if (i_top >= 0 && j_left>=0) {
      if(board[i_top][j_left] == word[k+1]) this.checkWord(board,word, k,i,j)
    }
  }
  return true;
}
// @lc code=end

