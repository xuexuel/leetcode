/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.queue1 = [];
  this.queue2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue1.unshift(x);
  
  while (this.queue2.length) {
    this.queue1.unshift( this.queue2.shift());
  }
  while (this.queue1.length) {
    this.queue2.unshift(this.queue1.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return  this.queue2.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return  this.queue2[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return  this.queue2.length == 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

