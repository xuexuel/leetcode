/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let ret = [];
  for (let i = left; i <= right; i++){
    let temp = i.toString(), flag = true;
    for (let j = 0; j < temp; j++){
      if (i % temp[j] !== 0) {
        flag = false;
        break;
      }
    }
    if (flag) ret.push(i);
  }
  return ret;
};
// @lc code=end

