/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  if (root == null) return '';
  let ret = '';
  ret += root.val;
  if (root.left == null && root.right == null) return ret;
  ret += '(';
  ret += serialize(root.left);
  if (root.right) {
    ret += ',';
    ret += serialize(root.right);
  }
  ret += ')';
  return ret;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let scode = 0, ind = 0, k = 0;
  let s = [];
  let p, root = null;
  while (ind < data.length) {
    switch (scode) {
      case 0: {
        if (data[ind] <= '9' && data[ind] >= '0') scode = 1;
        else if (data[ind] == '(') scode = 2;
        else if (data[ind] == ',') scode = 3;
        else if (data[ind] == ')') scode = 4;
      } break;
      case 1: {
        let num = 0;
        while (ind < data.length && data[ind] <= '9' && data[ind] >= '0') {
          num = num * 10 + (data[ind] - '0');
          ind += 1;
        }
        p = new TreeNode(num);
        if (root == null) root = p;
        if (k == 1) s[s.length - 1].left = p;
        else if (k == 2) s[s.length - 1].right = p;
        scode = 0;
      } break;
      case 2: {
        s.push(p);
        ind += 1;
        k = 1;
        scode = 0;
      } break;
      case 3: {
        ind += 1;
        k = 2;
        scode = 0;
      } break;
      case 4: {
        s.pop();
        ind += 1;
        scode = 0;
      } break;
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

