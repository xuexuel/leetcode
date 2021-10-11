/*
 * @lc app=leetcode.cn id=373 lang=javascript
 *
 * [373] 查找和最小的K对数字
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
// var kSmallestPairs = function (nums1, nums2, k) {
//   let heap = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (heap.length < k) {
//         heap.push([nums1[i], nums2[j]]);
//         shiftUp(heap, heap.length - 1);
//         continue;
//       }
//       if (nums1[i] + nums2[j] >= sum(heap[0])) break;
//       heap[0] = [nums1[i], nums2[j]];
//       shiftDown(heap, 0);

//     }
//   }
//   return heap;
// };

// function shiftUp(heap, i) {
//   while (i) {
//     let p_ind = (i - 1) >> 1;
//     if (sum(heap[p_ind]) < sum(heap[i])) {
//       swap(heap, p_ind, i);
//       i = p_ind;
//     } else {
//       break;
//     }
//   }
// }
// function shiftDown(heap, i) {
//   let n = heap.length - 1;
//   while (i < n) {
//     let l_ind = i * 2 + 1, r_ind = i * 2 + 2, temp = i;
//     if (l_ind <= n && sum(heap[temp]) < sum(heap[l_ind])) temp = l_ind;
//     if (r_ind <= n && sum(heap[temp]) < sum(heap[r_ind])) temp = r_ind;
//     if (temp === i) break;
//     swap(heap, temp, i);
//     i = temp;
//   }
// }
// function sum(arr) {
//   return arr.reduce((a, b) => a + b);
// }

// function swap(heap, i, j) {
//   if (i === j) return;
//   [heap[i], heap[j]] = [heap[j], heap[i]];
// }

// var kSmallestPairs = function (nums1, nums2, k) {
//   let arr = [], res = [], max = 0;
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       let temp = nums1[i] + nums2[j];
//       if (arr.length >= k && temp > max) break;
//       arr.push([nums1[i], nums2[j]]);
//       max = Math.max(max, temp);
//     }
//   }
//   arr.sort((a, b) => {
//     let num_a = a[0] + a[1];
//     let num_b = b[0] + b[1];
//     return num_a - num_b;
//   })
//   for (let i = 0; i < Math.min(k, arr.length); i++) {
//     res.push(arr[i]);
//   }
//   return res;
// }
var kSmallestPairs = function (nums1, nums2, k) {

}
// @lc code=end

