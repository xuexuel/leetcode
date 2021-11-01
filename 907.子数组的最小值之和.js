/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  let stack = [];
  let mod_num = 1e9 + 7;
  let ans = 0;
  let sum = new Array(arr.length + 1);
  sum[0] = 0;
  for (let i = 0; i < arr.length; i++){
    while (stack.length && arr[i] <= arr[stack[stack.length - 1]])
      stack.pop();
    let ind = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
    sum[stack.length] = (sum[stack.length - 1] + arr[i] * (i - ind)) % mod_num;
    ans += sum[stack.length];
    ans %= mod_num;
  }
  return ans;
};
// @lc code=end

