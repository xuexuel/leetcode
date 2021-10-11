/*
 * @lc app=leetcode.cn id=1670 lang=javascript
 *
 * [1670] 设计前中后队列
 */

// @lc code=start
// class FrontMiddleBackQueue {
//   constructor() {
//     this.arr1 = [];
//     this.arr2 = [];
//   }
//   // 后面比前面多一个元素
//   FrontMiddleBack() {
//     let l1 = this.arr1.length;
//     let l2 = this.arr2.length;
//     if (l1 === 0 && l2 === 0) return;
//     if (l1 > l2) {
//       this.arr2.unshift(this.arr1.pop());
//     } else if (l1 + 1 < l2) {
//       this.arr1.push(this.arr2.shift());
//     }
//   }
//   pushFront(value) {
//     this.arr1.unshift(value);
//     this.FrontMiddleBack();
//   }
//   pushMiddle(value) {
//     this.arr1.push(value);
//     this.FrontMiddleBack();
//   }
//   pushBack(value) {
//     this.arr2.push(value);
//     this.FrontMiddleBack();
//   }
//   popFront() {
//     let res = '';
//     if (this.arr1.length === 0) {
//       if (this.arr2.length === 0) return -1;
//       else res = this.arr2.shift();
//     } else {
//       res = this.arr1.shift();
//     }
//     this.FrontMiddleBack();
//     return res;
//   }
//   popMiddle() {
//     let res = '';
//     let l1 = this.arr1.length;
//     let l2 = this.arr2.length;
//     if (l1 === 0 && l2 === 0) return -1;
//     if (l1 === l2) {
//       res = this.arr1.pop();
//     } else {
//       res = this.arr2.shift();
//     }
//     this.FrontMiddleBack();
//     return res;
//   }
//   popBack() {
//     if (this.arr2.length === 0) return -1;
//     let res = this.arr2.pop();
//     this.FrontMiddleBack();
//     return res;
//   }
// }
class FrontMiddleBackQueue {
  constructor() {
    this.arr1 = [];
    this.arr2 = [];
  }
  FrontMiddleBack() {
    console.log('调整前 arr1:' + this.arr1 + ' arr2:' + this.arr2);
    let l1 = this.arr1.length;
    let l2 = this.arr2.length;
    if (l1 === 0 && l2 === 0) return;
    if (l1 > l2) {
      this.arr2.unshift(this.arr1.pop());
    } else if (l1 + 1 < l2) {
      this.arr1.push(this.arr2.shift());
    }
    console.log('调整后 arr1:' + this.arr1 + ' arr2:' + this.arr2);
  }
  pushFront(val) {
    this.arr1.unshift(val);
    this.FrontMiddleBack();
  }
  pushMiddle(val) {
    this.arr1.push(val);
    this.FrontMiddleBack();
  }
  pushBack(val) {
    this.arr2.push(val);
    this.FrontMiddleBack();
  }
  popFront() {
    let val = '';
    if (this.arr1.length === 0) {
      if (this.arr2.length === 0) return -1;
      else val = this.arr2.shift();
    } else {
      val = this.arr1.shift();
    }
    this.FrontMiddleBack();
    return val;
  }
  popMiddle() {
    let val = '';
    if (this.arr2.length === 0) return -1;
    if (this.arr1.length === this.arr2.length) {
      val = this.arr1.pop();
    } else {
      val = this.arr2.shift();
    }
    this.FrontMiddleBack();
    return val;
  }
  popBack() {
    let val = '';
    if (this.arr2.length === 0) return -1;
    else val = this.arr2.pop();
    this.FrontMiddleBack();
    return val;
  }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */
// @lc code=end

