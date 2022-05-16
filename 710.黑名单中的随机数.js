/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function(n, blacklist) {
  this.length = n - blacklist.length;
  this.mapping = {};
  for (let b of blacklist) {
    this.mapping[b] = 666;
  }
  let last = n - 1;
  for (let b of blacklist) {
    if (b < this.length) {
      while (this.mapping[last]!=undefined) {
        last--;
      }
      this.mapping[b] = last;
      last--;
    }
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function() {
  let index =  Math.floor(Math.random()*this.length);
  if (this.mapping[index]!=undefined) {
    return this.mapping[index];
  }
  return index;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

