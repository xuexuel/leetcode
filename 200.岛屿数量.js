/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let n = grid.length, m = grid[0].length;
  let uf = new UnionFind(n * m);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == '0') continue;
      if (i > 0 && grid[i - 1][j] == '1') {
        uf.merge(ind(i, j, m), ind(i - 1, j, m));
      }
      if (j > 0 && grid[i][j - 1] == '1') {
        uf.merge(ind(i, j, m), ind(i, j - 1, m));
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == '1' && uf.find(ind(i, j, m)) === ind(i, j, m)) ans += 1;
    }
  }
  return ans;
};

function ind(i, j, m) {
  return (i) * m + (j);
}

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

