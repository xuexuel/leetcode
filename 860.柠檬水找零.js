/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
// var lemonadeChange = function (bills) {
//   let a5 = 0, a10 = 0;
//   for (let i = 0; i < bills.length; i++) {
//     switch (bills[i]) {
//       case 5: a5 += 1; break;
//       case 10: {
//         if (!a5) return false;
//         a5 -= 1;
//         a10 += 1;
//       }
//         break;
//       case 20: {
//         if (a10 && a5) {
//           a10 -= 1;
//           a5 -= 1;
//         } else if (!a10 && a5 > 3) {
//           a5 -= 3;
//         } else {
//           return false;
//         }
//       }
//         break;
//     }
//   }
//   return true;
// };

var lemonadeChange = function (bills) {

}
// @lc code=end

