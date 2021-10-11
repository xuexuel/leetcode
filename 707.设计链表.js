/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};
class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.length) return -1;
  if (this.head === null) return -1;
  let cur = this.head;
  while (cur && index > 0) {
    cur = cur.next;
    index -= 1;
  }
  return cur ? cur.val : -1;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let temp = new LinkNode(val, this.head);
  if (this.length === 0) this.tail = temp;
  this.head = temp;
  this.length += 1;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let temp = new LinkNode(val, null);
  if (this.length === 0) {
    this.head = temp;
    this.tail = temp;
  } else {
    this.tail.next = temp;
    this.tail = temp;
  }
  this.length += 1;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) return this.addAtHead(val);
  if (index === this.length) return this.addAtTail(val);
  if (index > this.length) return;
  let node = new LinkNode(val, null);
  let cur = this.head;
  while (index - 1 > 0) {
    cur = cur.next;
    index -= 1;
  }
  node.next = cur.next;
  cur.next = node;
  this.length += 1;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.length) return null;
  let ret = new LinkNode(null, this.head);
  let cur = ret;

  while (index > 0) {
    cur = cur.next;
    index -= 1;
  }
  cur.next = cur.next.next;
  if (cur.next === null) {
    this.tail = cur;
  }
  this.head = ret.next;
  this.length -= 1;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

