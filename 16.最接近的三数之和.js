/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function compare(a, b) {
  return parseInt(a) < parseInt(b) ? -1 : 1;
}
var threeSumClosest = function (nums, target) {
  // 先对数组进行排序 左小右大
  nums = nums.sort(compare);
  // 定义返回结果
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length; i++) {
    // 定义左右指针
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      // 当前循环数据之和
      let item = nums[i] + nums[left] + nums[right];
      // 绝对值进行比较，取较小的一个存入res
      if (Math.abs(target - item) <= Math.abs(target - res)) res = item;
      if (target > item) {
        left++;
      } else if (target < item) {
        right--;
      } else {
        return res;
      }
    }
  }
  return res;
};
// @lc code=end

