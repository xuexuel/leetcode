/*
 * @lc app=leetcode.cn id=2032 lang=javascript
 *
 * [2032] 至少在两个数组中出现的值
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
// var twoOutOfThree = function (nums1, nums2, nums3) {
//   let obj = {};
//   for (const item of nums1) {
//     if (!obj[item]) {
//       obj[item] = 1;
//     }
//   }
//   for (const item of nums2) {
//     if (!obj[item]) {
//       obj[item] = 3;
//     } else if (obj[item] == 1) {
//       obj[item] += 3;
//     }
//   }
//   for (const item of nums3) {
//     if (!obj[item]) {
//       obj[item] = 5;
//     } else if (obj[item] == 1 || obj[item] == 3 || obj[item] == 4) {
//       obj[item] += 5;
//     }
//   }
//   let res = [];
//   for (const key in obj) {
//     if (obj[key] == 4 || obj[key] == 6 || obj[key] == 8 || obj[key] == 9) {
//       res.push(key);
//     }
//   }
//   return res;
// };

var twoOutOfThree = function(nums1, nums2, nums3) {
  const map = new Map();
  for (const i of nums1) {
      map.set(i, 1);
  }
  for (const i of nums2) {
      map.set(i, (map.get(i) || 0) | 2);
  }
  for (const i of nums3) {
      map.set(i, (map.get(i) || 0) | 4);
  }
  const res = [];
  for (const [k, v] of map.entries()) {
      if ((v & (v - 1)) !== 0) {
          res.push(k);
      }
  }
  return res;
};
// @lc code=end

