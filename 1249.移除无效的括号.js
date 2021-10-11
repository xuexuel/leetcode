/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var minRemoveToMakeValid = function (s) {
//   let str = '';
//   for (let i = 0, cnt = 0; i < s.length; i++) {
//     const item = s[i];
//     if (item === '(') {
//       str += item;
//       cnt++;
//     } else if (item === ')') {
//       if (cnt !== 0) {
//         cnt--;
//         str += item;
//       }
//     } else {
//       str += item;
//     }
//   }
//   s = str;
//   str = '';
//   for (let i = s.length - 1, cnt = 0; i >= 0; i--) {
//     const item = s[i];
//     if (item === ')') {
//       str += item;
//       cnt++;
//     } else if (item === '(') {
//       if (cnt !== 0) {
//         cnt--;
//         str += item;
//       }
//     } else {
//       str += item;
//     }
//   }
//   s = str;
//   str = '';
//   for (let i = s.length - 1; i >= 0; i--) {
//     str += s[i];
//   }
//   return str;
// };

// *栈和字符串
// var minRemoveToMakeValid = function (s) {
//   let arr = [], str = '';
//   for (let i = 0; i < s.length; i++) {
//     const item = s[i];
//     if (item === '(') {
//       arr.push(item);
//     } else if (item === ')') {
//       if (arr.length !== 0) {
//         let temp = '';
//         let ss = '';
//         while (arr.length > 0) {
//           temp = arr.pop();
//           ss = temp + ss;
//           if (temp === '(') {
//             break;
//           }
//         }
//         if (arr.length === 0) {
//           str = str + ss + item;
//         } else {
//           arr.push(ss + item);
//         }
//       }
//     } else if (arr.length > 0) {
//       arr.push(item);
//     } else {
//       str += item;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (item !== '(') {
//       str += item;
//     }
//   }
//   return str;
// }
var minRemoveToMakeValid = function (s) {

}
// @lc code=end

