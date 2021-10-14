/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  let map = new Map();
  let arr = [...score].sort((a, b) => b-a);
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i + 1);
  }
  arr = [];
  for (let i = 0; i < score.length; i++) {
    let item = map.get(score[i]);
    if (item === 1) arr.push("Gold Medal");
    else if (item === 2) arr.push("Silver Medal")
    else if (item === 3) arr.push("Bronze Medal")
    else arr.push(item.toString());
  }
  return arr;
};
// @lc code=end

