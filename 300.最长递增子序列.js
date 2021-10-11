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
var lengthOfLIS = function(nums) {
  let head = 1, tail = nums.length
  if (tail === 0) return 0
  let d = []
  d[head] = nums[0]
  for (let i = 1; i < tail; ++i) {
    if (nums[i] > d[head]) { d[++head] = nums[i]; }
    else { let l = 1, r = head, flag = 0;
      // 如果找不到说明所有的数都比 nums[i] 大， 此时要更新 d[1]，所以这里将 flag 设为 0 
      while (l <= r) {
        let mid = (l + r) >> 1;
        if (d[mid] < nums[i]) {
          flag = mid;
          l = mid + 1;
        }
        else {
          r = mid - 1;
        }
      }
      d[flag + 1] = nums[i];
    }
  }
  return head;
};
// @lc code=end

