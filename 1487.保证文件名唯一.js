/*
 * @lc app=leetcode.cn id=1487 lang=javascript
 *
 * [1487] 保证文件名唯一
 */

// @lc code=start
/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function (names) {
  let map = {}, ans = [];
  for (const name of names) {
    let s = name;
    while (s in map) {
      s = name + '(' + map[name] + ')';
      ++map[name];
    }
    map[s] = 1;
    ans.push(s);
  }
  return ans;
};
// @lc code=end

