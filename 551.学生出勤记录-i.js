/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absent = 0, late = 0;
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === 'A') {
      late = 0;
      absent++;
      if (absent > 1) return false;
    } else if(item === 'L'){
      late++;
      if (late > 2) return false;
    } else {
      late = 0;
    }
  }
  return true;
};
// @lc code=end

