/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 省份数量
 */

// @lc code=start
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
// var findCircleNum = function (isConnected) {
//   let circleNum = isConnected.length;
//   let uf = new UnionFind(circleNum);
//   for (let i = 0; i < circleNum; i++) {
//     for (let j = i + 1; j < circleNum; j++) {
//       if (isConnected[i][j] == 1) uf.merge(i, j);
//     }
//   }
//   return uf.getCount();
// };
var findCircleNum = function (isConnected) {

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

