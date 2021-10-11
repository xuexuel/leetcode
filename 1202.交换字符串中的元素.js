/*
 * @lc app=leetcode.cn id=1202 lang=javascript
 *
 * [1202] 交换字符串中的元素
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  let uf = new UnionFind(s.length);
  for (let i = 0; i < pairs.length; i++) {
    let temp1 = pairs[i][0], temp2 = pairs[i][1];
    if (uf.find(temp1) !== uf.find(temp2)) {
      uf.merge(temp1, temp2);
    }
  }
  let fa = uf.parent;
  let vec = new Array(s.length).fill(0).map(() => new Array());
  for (let i = 0; i < s.length; i++) {
    fa[i] = uf.find(i);
    vec[fa[i]].push(s[i]);
  }
  // 按照字典序排序
  for (let i = 0; i < s.length; i++) {
    if (vec[i].length > 0) {
      vec[i].sort((a, b) => a.charCodeAt() - b.charCodeAt());
    }
  }
  console.log(vec);

  let p = new Array(s.length).fill(0);
  let ans = new Array(s.length).fill(0);

  for (let i = 0; i < s.length; i++) {
    ans[i] = vec[fa[i]][p[fa[i]]];
    p[fa[i]]++;
  }
  return ans.join('');
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((value, index) => index);
    this.rank = new Array(n).fill(1);
    this.setCount = n;  // 连通量
  }
  find(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }
  merge(index1, index2) {
    let root1 = this.find(index1), root2 = this.find(index2);
    if (root1 === root2) return;
    if (this.rank[root1] < this.rank[root2]) [root1, root2] = [root2, root1];
    this.parent[root2] = root1;
    this.rank[root1] += this.rank[root2];
    this.setCount--;
  }
  getCount() {
    return this.setCount;
  }
  connected(index1, index2) {
    return this.find(index1) === this.find(index2);
  }
}
// @lc code=end

