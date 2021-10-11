/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  if (!nums.length) return [];
  let objArr = [];
  //对象和index 
  let resArr = [];
  //存放次数 
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    let obj = {
      num: ele, index: i
    }
    resArr.push(0);
    objArr.push(obj);
  }
  sliceNums(objArr);
  return resArr;

  function sliceNums(nums) {
    let mid = nums.length >> 1;
    let left = nums.slice(0, mid);
    let right = nums.slice(mid, nums.length);
    if (nums.length === 1) return nums;
    return merge(sliceNums(left), sliceNums(right));
  }
  
  function merge(left, right) {
    let res = [];
    // 定义“后有序数组”中一个指针 
    let j = 0;
    while (left.length && right.length) {
      if (left[0].num > right[0].num) {
        res.push(right[0]);
        right.shift();
        j++;
      } else {
        // “前有序数组” 的元素出列的时候，数一数 “后有序数组” 已经出列了多少元素
        resArr[left[0].index] += j;
        res.push(left[0]);
        left.shift();
      }
    }
    while (left.length) { // 同理
      resArr[left[0].index] += j;
      res.push(left[0]);
      left.shift();
    }
    while (right.length) {
      res.push(right[0]);
      right.shift();
      j++;
    }
    return res;
  }
}
// @lc code=end

