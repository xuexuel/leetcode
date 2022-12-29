/*
 * @lc app=leetcode.cn id=2287 lang=javascript
 *
 * [2287] 重排字符形成目标字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
  let sobj = {},tobj={}
  for (let i = 0; i < target.length; i++) {
    if (tobj[target[i]]) {
      tobj[target[i]] += 1;
    } else {
      tobj[target[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (sobj[s[i]]) {
      sobj[s[i]] += 1;
    } else {
      sobj[s[i]] = 1;
    }
  }
  let res = Infinity;
  Object.keys(tobj).map((key, item) => {
    if (!sobj[key]) {
      res = 0;
    } else {
      let temp = Math.floor(sobj[key] / tobj[key]);
      res = Math.min(res, temp);
    }
  })
  return res;
};
// @lc code=end

