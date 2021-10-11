/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function compare(a, b) {
  return parseInt(a) < parseInt(b) ? -1 : 1;
}
var threeSum = function (nums) {
  let arr = [];
  if (!nums || nums.length < 3) return arr;
  nums = nums.sort(compare);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    let target = -nums[i];
    while (left < right) {
      if (target == nums[left] + nums[right]) {
        arr.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (target > nums[left] + nums[right]) {
        left++;
      } else {
        right--;
      }
    }
  }
  return arr;
};
// @lc code=end

