/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// var leastInterval = function (tasks, n) {
//   let cnt = new Array(26).fill(0);
//   for (let i = 0; i < tasks.length; i++) {
//     cnt[tasks[i].charCodeAt() - 'A'.charCodeAt()] += 1;
//   }
//   cnt.sort((a, b) => b - a )
//   let m = 1;
//   for (let i = 1; i < cnt.length; i++) {
//     if (cnt[i] === cnt[0]) m++;
//     else break;
//   }
//   let res1 = tasks.length;
//   let res2 = (cnt[0] - 1) * (n + 1) + m;
//   return Math.max(res1, res2);
// }

var leastInterval = function (tasks, n) {

}
// @lc code=end

