/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function(height) {
//   let ans = 0; const stack = [];
//   const n = height.length;
//   for (let i = 0; i < n; ++i) {
//     while (stack.length && height[i] > height[stack[stack.length - 1]]) {
//       const top = stack.pop();
//       if (!stack.length) {
//         break;
//       }
//       const left = stack[stack.length - 1];
//       const currWidth = i - left - 1;
//       const currHeight = Math.min(height[left], height[i]) - height[top];
//       ans += currWidth * currHeight;
//     }
//     stack.push(i);
//   }
//   return ans;
// };
// *暴力解法
// var trap = function (height) { 
//   let res = 0;
//   let n = height.length;
//   for (let i = 1; i < n; i++) {
//     let l_max = 0, r_max = 0;
//     for (let j = i; j < n; j++) {
//       r_max = Math.max(r_max, height[j]);      
//     }
//     for (let j = i; j >=0; j--) {
//       l_max = Math.max(l_max, height[j]);      
//     }
//     res += Math.min(l_max, r_max) - height[i];
//   }
//   return res;
// }
// *备忘录优化
// var trap = function (height) {
//   if (height.length == 0) return 0;
//   let n = height.length;
//   let res = 0;
//   let l_max = new Array(n);
//   let r_max = new Array(n);
//   l_max[0] = height[0];
//   r_max[n - 1] = height[n - 1];
//   for (let i = 1; i < n; i++) {
//     l_max[i] = Math.max(height[i], l_max[i - 1]);
//   }
//   for (let i = n - 2; i >= 0; i--) {
//     r_max[i] = Math.max(height[i], r_max[i + 1]);
//   }
//   for (let i = 1; i < n - 1; i++) {
//     res += Math.min(l_max[i], r_max[i]) - height[i];
//   }
//   return res;
// }
// *双指针
var trap = function (height) { 
  let n = height.length;
  if (n == 0) return 0;
  let res = 0;
  let left = 0, right = n - 1;
  let l_max = height[0];
  let r_max = height[n - 1];
  while (left <= right) {
    l_max = Math.max(l_max, height[left]);
    r_max = Math.max(r_max, height[right]);
    if (l_max < r_max) {
      res += l_max - height[left];
      left++;
    } else {
      res += r_max - height[right];
      right--;
    }
  }
  return res;
}
// @lc code=end

