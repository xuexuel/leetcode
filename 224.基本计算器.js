/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replaceAll('+0', '').replaceAll('-0', '').replaceAll(' ', '');
  let l = 0, r = s.length - 1;
  let ret = calc(s, l, r);
  return ret;
}
function calc(s, l, r) {
  let op = -1, pri = 10000 - 1, cur_pri, temp = 0;
  for (let i = l; i <= r; i++) {
    cur_pri = 10000;
    switch (s[i]) {
      case '+':
      case '-': cur_pri = 1 + temp; break;
      case '*':
      case '/': cur_pri = 2 + temp; break;
      case '(': temp += 100; break;
      case ')': temp -= 100; break;
    }
    if (cur_pri <= pri) {
      pri = cur_pri;
      op = i;
    }
  }
  if (op === -1) {
    let num = 0;
    for (let i = l; i <= r; i++) {
      if (s[i] < '0' || s[i] > '9') continue;
      num = num * 10 + (s[i] - '0');
    }
    return num;
  }
  let a = calc(s, l, op - 1);
  let b = calc(s, op + 1, r);
  switch (s[op]) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
  }
  return 0;
}
// @lc code=end

