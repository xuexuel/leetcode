/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let memo = new Array(n + 1);
  for (let i = 0; i < memo.length;i++){
    memo[i] = new Array(n + 1).fill(0);
  }
  let getBSTnum = (left, right) => {
    if (left > right) return 1;
    if (memo[left][right] != 0) return memo[left][right];
    let res = 0;
    for (let i = left; i <= right; i++) {
      let leftBst = getBSTnum(left, i - 1);
      let rightBst = getBSTnum(i + 1, right);
      res += leftBst * rightBst;
    }
    memo[left][right] = res;
    return res;
  }
  return getBSTnum(1, n);
};
// @lc code=end

