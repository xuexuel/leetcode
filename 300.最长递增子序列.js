/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// *动态规划O(N^2)
// var lengthOfLIS = function (nums) {
//   let dp = new Array(nums.length).fill(1);
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }
//   let res = 0;
//   for (let i = 0; i < dp.length; i++) {
//     res = Math.max(res, dp[i]);
//   }
//   return res;
// }

// * 二分查找  牌堆
var lengthOfLIS = function (nums) {
  let top = new Array(nums.length);
  let piles = 0;
  for (let i = 0; i < nums.length; i++) {
    let poker = nums[i];
    let left = 0, right = piles;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (top[mid] > poker) {
        right = mid;
      } else if (top[mid] < poker) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (left == piles) piles++;
    top[left] = poker;
  }
  return piles;
}

// * 二分查找
// var lengthOfLIS = function(nums) {
//   let head = 1, tail = nums.length
//   if (tail === 0) return 0
//   let d = []
//   d[head] = nums[0]
//   for (let i = 1; i < tail; ++i) {
//     if (nums[i] > d[head]) { d[++head] = nums[i]; }
//     else { let l = 1, r = head, flag = 0;
//       // 如果找不到说明所有的数都比 nums[i] 大， 此时要更新 d[1]，所以这里将 flag 设为 0
//       while (l <= r) {
//         let mid = (l + r) >> 1;
//         if (d[mid] < nums[i]) {
//           flag = mid;
//           l = mid + 1;
//         }
//         else {
//           r = mid - 1;
//         }
//       }
//       d[flag + 1] = nums[i];
//     }
//   }
//   return head;
// };
// @lc code=end

