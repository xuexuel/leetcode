/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    let temp = target - item;
    if (numbers.includes(temp)) {
      let j = i;
      while (j++ < numbers.length) {
        if (numbers[j] === temp) {
          return [i+1, j+1];
        }
      }
    } 
  }
  return null;
};
// @lc code=end

