/*
 * @lc app=leetcode.cn id=765 lang=javascript
 *
 * [765] 情侣牵手
 */

// @lc code=start
/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  let N = row.length >> 1;
  let uf = new UnionFind(N);
  for (let i = 0; i < row.length; i += 2) {
    uf.merge(row[i] >> 1, row[i + 1] >> 1);
  }
  return N - uf.getCount();
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

