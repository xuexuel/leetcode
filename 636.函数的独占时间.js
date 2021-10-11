/*
 * @lc app=leetcode.cn id=636 lang=javascript
 *
 * [636] 函数的独占时间
 */

// @lc code=start
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let arr = new Array(n).fill(0);
  let stack = [];
  for (let i = 0, pre = 0; i < logs.length; i++) {
    let items = logs[i].split(':');
    items[0] = Number(items[0]);
    items[2] = Number(items[2]);
    if (items[1] === 'start') {
      if (stack.length !== 0) {
        arr[stack[stack.length - 1]] += items[2] - pre;
      }
      pre = items[2];
      stack.push(items[0]);
    } else {
      arr[items[0]] += items[2] - pre + 1;
      pre = items[2] + 1;
      stack.pop();
    }
  }
  return arr;
};
// @lc code=end

