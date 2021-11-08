/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let n = num.length;
  if (n <= k || n === 1) return '0';
  const handleStr = (str) => {
    let i = 0;
    while (str[i] == 0) i++;
    if (i == str.length) return '0'
    return str.slice(i)
  }
  let stack = [];
  let count = 0;
  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      count++;
      if (count === k) {
        return handleStr(stack.join('') + num.slice(i))
      }
    }
    stack.push(num[i])
  }
  if (count < k) return handleStr(stack.join('').slice(0, count - k));
};
// @lc code=end

