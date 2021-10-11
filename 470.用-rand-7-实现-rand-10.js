/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  while (true) {
    let num = (rand7() - 1) * 7 + rand7();
    if (num <= 40) return num % 10 + 1;
    num = (num - 40 - 1) * 7 + rand7();
    if (num <= 60) return num % 10 + 1;
    num = (num - 60 - 1) * 7 + rand7();
    if (num <= 20) return num % 10 + 1;
  }
  return num;
};
// @lc code=end

