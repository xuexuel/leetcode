/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// var minWindow = function (s, t) { 
//   let cnt = 0, cnts = new Array(128).fill(0);
//   for (const x of t) {
//     cnts[x] -= 1;
//     if (cnts[x] == -1) cnt += 1;
//   }
//   let ans_len = s.length+1, l = 0, r = 0;
//   let ans = '';
//   while (r <= s.length) {
//     if (cnt) {
//       if (r == s.length) break;
//         cnts[s[r]] += 1;
//         if (cnts[s[r]] == 0) cnt -= 1;
//         r += 1;
      
//     } else {
//       cnts[s[l]] -= 1;
//       if (cnts[s[l]] == -1) cnt += 1;
//       l += 1;
//     }
//     if (cnt == 0 && r - l < ans_len) {
//       ans_len = r - l;
//       ans = s.substring(l, r - l);
//     }
//   }
//   return ans;
// }

// *滑动窗口
var minWindow = function (s, t) {
  let need = {};
  let window = {};
  for (let a of t) {
    need[a] = (need[a] || 0) + 1;
  }
  let left = 0, right = 0;
  let valid = 0;
  // 最小覆盖子串的起始索引及长度
  let start = 0, len = Number.MAX_VALUE;
  while (right < s.length) {
    let c = s[right];
    right++;
    if (need[c]) {
      // 当前字符在需要的字符中，则更新当前窗口统计
      window[c] = (window[c] || 0) + 1;
      if (window[c] == need[c]) {
        valid++;
      }
    }
    // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
    while (valid == Object.keys(need).length) {
      // 更新最小覆盖子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      let d = s[left];
      left++;
      if (need[d]) {
        if (window[d] == need[d]) {
          valid--;
        }
        window[d]--;
      }
    }
  }
  return len == Number.MAX_VALUE ? "" : s.substr(start, len);
};
// @lc code=end

