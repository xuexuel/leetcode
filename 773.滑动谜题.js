/*
 * @lc app=leetcode.cn id=773 lang=javascript
 *
 * [773] 滑动谜题
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  let str = board.flat(2).join('');
  let target = '123450';
  let obj = [[1, 3], [0, 4, 2], [1, 5], [0, 4], [3, 1, 5], [4, 2]];
  let q = [str], visited = [str];
  let step = 0;
  while (q.length != 0) {
    let sz = q.length;
    for (let i = 0; i < sz; i++) {
      let cur = q.shift();
      if (target == cur) return step;
      let idx = cur.split('').indexOf('0');
      for (let adj of obj[idx]) {
        let arr = cur.split('');
        [arr[adj], arr[idx]] = [arr[idx], arr[adj]];
        let new_board = arr.join('');
        if (!visited.includes(new_board)) {
          q.push(new_board);
          visited.push(new_board);
        }
      }
    }
    step++;
  }
  return -1;
};
// @lc code=end

