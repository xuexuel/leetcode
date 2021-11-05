/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let map = new Map();
  let result = 0;
  for (const ans of answers) {
    map.set(ans, map.has(ans) ? map.get(ans) + 1 : 1);
  }
  for (const [ans, count] of map) {
    result += Math.ceil(count / (ans + 1)) * (ans + 1)
  } return result;
};
// @lc code=end

