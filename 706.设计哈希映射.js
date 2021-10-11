/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start

var MyHashMap = function() {
  this.BASE = 100;
  this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  const h = this.hash(key);
  for (const item of this.data[h]) {
    if (item[0] === key) {
      item[1] = value;
      return;
    }
  }
  this.data[h].push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const h = this.hash(key);
  for (const item of this.data[h]) {
    if (item[0] === key) return item[1];
  }
  return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  const h = this.hash(key);
  for (const item of this.data[h]) {
    if (item[0] === key) {
      const idx = this.data[h].indexOf(item);
      this.data[h].splice(idx, 1);
      return;
    }
  }
};

MyHashMap.prototype.hash = function (key) {
  return key % this.BASE;
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end

