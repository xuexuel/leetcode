/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function() {
  this.h = {},this.a = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  return this.h[val] === undefined && (this.a.push(val),this.h[val] = this.a.length - 1,true);
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  return this.h[val] !== undefined && ( [this.a[this.h[val]],this.a[this.a.length - 1]] = [this.a[this.a.length - 1],this.a[this.h[val]]], this.h[this.a[this.h[val]]] = this.h[val], this.a.pop(),delete(this.h[val]),true )
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.a[Math.random() * this.a.length | 0];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

