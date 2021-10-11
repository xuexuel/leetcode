/*
 * @lc app=leetcode.cn id=947 lang=javascript
 *
 * [947] 移除最多的同行或同列石头
 */

// @lc code=start
/**
 * @param {number[][]} stones
 * @return {number}
 */
// var removeStones = function (stones) {
//   let stonenum = stones.length;
//   let uf = new UnionFind(stonenum);
//   for (let i = 0; i < stonenum; i++) {
//     for (let j = i + 1; j < stonenum; j++) {
//       let [x1, y1] = stones[i];
//       let [x2, y2] = stones[j];
//       if (x1 === x2 || y1 === y2) {
//         uf.merge(i, j)
//       }
//     }
//   }
//   return stonenum - uf.getCount();
// };
var removeStones = function (stones) {

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

