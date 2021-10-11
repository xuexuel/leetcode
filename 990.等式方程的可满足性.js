/*
 * @lc app=leetcode.cn id=990 lang=javascript
 *
 * [990] 等式方程的可满足性
 */

// @lc code=start
/**
 * @param {string[]} equations
 * @return {boolean}
 */
// var equationsPossible = function (equations) {
//   let uf = new UnionFind(26);
//   for (const item of equations) {
//     if (item[1] == "!") continue;
//     let a = item.charCodeAt(0) - 97;
//     let b = item.charCodeAt(3) - 97;
//     uf.merge(a, b);
//   }
//   for (const item of equations) {
//     if (item[1] == "=") continue;
//     let a = item.charCodeAt(0) - 97;
//     let b = item.charCodeAt(3) - 97;
//     if (uf.find(a) === uf.find(b)) return false;
//   }
//   return true;
// };
var equationsPossible = function (equations) {

}
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((value, index) => index);
    this.rank = new Array(n).fill(1);
    this.setCount = n;  // 连通量
  }
  // 查找相应连通顶点
  find(index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.find(this.parent[index]);
    }
    return this.parent[index];
  }
  // 连通两个节点
  merge(index1, index2) {
    let root1 = this.find(index1), root2 = this.find(index2);
    if (root1 === root2) return;
    if (this.rank[root1] < this.rank[root2]) [root1, root2] = [root2, root1];
    this.parent[root2] = root1;
    this.rank[root1] += this.rank[root2];
    this.setCount--;
  }
  // 获取连通量
  getCount() {
    return this.setCount;
  }
  // 判断两个元素是否连通
  connected(index1, index2) {
    return this.find(index1) === this.find(index2);
  }
}
// @lc code=end

