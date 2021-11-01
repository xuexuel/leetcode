/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let stack = []
  let res = Array(T.length).fill(0)
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      let len = stack.length
      if (T[i] > T[stack[len - 1]]) {
        res[stack[len - 1]] = i - stack[len - 1]
        stack.pop()
      }
    }
    stack.push(i)
  }
  return res
};
// @lc code=end

