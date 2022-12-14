/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let memo = {};
  const dp = (s, i, p, j) => {
    let m = s.length,
      n = p.length;
    if (j == n) return i == m;
    if (i == m) {
      if ((n - j) % 2 == 1) {
        return false;
      }
      for (; j + 1 < n; j += 2) {
        if (p[j + 1] != "*") {
          return false;
        }
      }
      return true;
    }
    // 记录状态 (i, j)，消除重叠子问题
    let key = i + "," + j;
    if (memo[key]) return memo[key];
    let res = false;
    if (s[i] == p[j] || p[j] == ".") {
      if (j < n - 1 && p[j + 1] == "*") {
        res = dp(s, i, p, j + 2) || dp(s, i + 1, p, j);
      } else {
        res = dp(s, i + 1, p, j + 1);
      }
    } else {
      if (j < n - 1 && p[j + 1] == "*") {
        res = dp(s, i, p, j + 2);
      } else {
        res = false;
      }
    }
    // 将当前结果记入备忘录
    memo[key] = res;
    return res;
  };
  return dp(s, 0, p, 0);
};

// @lc code=end
