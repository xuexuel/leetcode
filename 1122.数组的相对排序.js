/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// var relativeSortArray = function(arr1, arr2) {
//   let arr = new Array(1005).fill(0);
//   for (const x of arr1) arr[x] += 1;
//   let k = 0;
//   for (const x of arr2) while (arr[x]--) arr1[k++]=x;
//   for (let i = 0; i < 1001; i++) {
//     if (arr[i] <= 0) continue;
//     while(arr[i]--) arr1[k++] = i;
//   }
//   return arr1;
// };

var relativeSortArray = function (arr1, arr2) {
  let arr = new Array(1005).fill(0);
  for (const x of arr1) arr[x] += 1;
  let k = 0;
  for (const x of arr2) while (arr[x]--) arr1[k++] = x;
  for (let i = 0; i < 1001; i++){
    if (arr[i] <= 0) continue;
    while (arr[i]--) arr1[k++] = i;
  }
  return arr1;
}
// @lc code=end

