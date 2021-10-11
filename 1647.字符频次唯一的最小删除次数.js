/*
 * @lc app=leetcode.cn id=1647 lang=javascript
 *
 * [1647] 字符频次唯一的最小删除次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

var minDeletions = function (s) {
  let indexArr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    indexArr[item.charCodeAt() - 97]++;
  }
  let arr = indexArr.filter(i => i > 0).sort((a, b) => b - a );
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    while (arr[i] >= arr[i - 1] && arr[i] > 0) {
      arr[i] -= 1;
      count++;
    }
  }
  return count;
}
// @lc code=end

