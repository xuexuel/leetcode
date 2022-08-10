/*
 * @lc app=leetcode.cn id=1031 lang=javascript
 *
 * [1031] 两个非重叠子数组的最大和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
  let max = 0;
  for (let i = firstLen; i <= nums.length; i++) {
    //第一次循环，截取数组
    let arr1 = nums.slice(i - firstLen, i);
    //找到当前截取数组之前的部分
    let rest1 = nums.slice(0, i - firstLen);
    //找到当前截取数组之后的部分
    let rest2 = nums.slice(i, nums.length);
    //分别在循环一次之前部分、之后部分，进行查找最大值即可
    secondFun(rest1);
    secondFun(rest2);
    function secondFun(rest) {
      if (rest.length < secondLen) return;
      for (let j = secondLen; j <= rest.length; j++) {
        let arr2 = rest.slice(j - secondLen, j);
        sum =
          arr1.reduce((pre, cur) => cur + pre) +
          arr2.reduce((pre, cur) => cur + pre);
        if (max < sum) {
          max = sum;
        }
      }
    }
  }
  return max;
};
// @lc code=end

