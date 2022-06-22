/*
 * @lc app=leetcode.cn id=1512 lang=javascript
 *
 * [1512] 好数对的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// var numIdenticalPairs = function(nums) {
//   if (!nums.length) return 0
//   let count = 0
//   let j = 0
//   for (let i = 0; i < nums.length; j++) {
//       if (j === nums.length) i++, j = 0
//       i < j && nums[j] === nums[i] && count++
//   }
//   return count
// };

var numIdenticalPairs = function (nums) { 
  let ans = 0, cnt = new Array(101).fill(0);
  for (const x of nums) {
    ans += cnt[x];
    cnt[x] += 1;
  }
  return ans;
}

// @lc code=end

