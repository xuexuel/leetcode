/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// *时间换空间
var twoSum = function (nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num in obj) {
      return [obj[num], i];
    } else {
      obj[target - num] = i;
    }
  }
};

// *动态map方法
// var twoSum = function (nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const num = target - nums[i];
//     if (map.has(num)) {
//       return [map.get(num), i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
// };

// *indexof方法
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let res = target - nums[i];
//     let cnt = nums.indexOf(res);
//     if (cnt !== -1 && cnt !== i) return [cnt, i];
//   }
// };

// *静态map方法
// var twoSum = function (nums, target) {
//   let items = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     items.set(nums[i], i);
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let res = target - nums[i];
//     if (items.has(res) && items.get(res) !== i) return [i, items.get(res)];
//   }
// };

// *暴力双循环
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
//   return false;
// };
// @lc code=end

