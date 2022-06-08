/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start
const TrieNode = function () {
  this.next = {};
  this.isEnd = false;
};
var MagicDictionary = function () {
  this.root = new TrieNode();
};


/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.insert = function (word) {
  let node = this.root;
  for (const ch of word) {
    if (!node.next[ch]) node.next[ch] = new TrieNode();
    node = node.next[ch];
  }
  node.isEnd = true;
};
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (const word of dictionary) {
    this.insert(word);
  }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  for (let i = 0; i < searchWord.length; i++) {
    let target = searchWord.slice(0, i) + '*' + searchWord.slice(i + 1);
    const node = this._search(this.root, target, searchWord[i]);
    if (node && node.isEnd) return true;
  }
  return false;
};
MagicDictionary.prototype._search = function (node, word, cahngeCh) {
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    if (ch == '*') {
      // 从所有子节点中寻找
      for (const [ch, newnode] of Object.entries(node.next)) {
        if (ch != cahngeCh) {
          const res = this._search(newnode, word.slice(i + 1));
          if (res && res.isEnd) return res;
        }
      }
      return null;
    } else if (node.next[ch]) {
      node = node.next[ch];
    } else {
      return null;
    }
  }
  return node;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

