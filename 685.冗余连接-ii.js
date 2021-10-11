/*
 * @lc app=leetcode.cn id=685 lang=javascript
 *
 * [685] 冗余连接 II
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function (edges) {
  let nodeCount = edges.length;//获取边的长度 就是节点的个数 
  let uf = new UnionFind(nodeCount + 1);//根据结点的个数构建并查集，加1 避免它从0开始 
  let parent = [];// 怎么记录产生了两个父节点，整一个数组，记录每一个节点的父节点是多少 
  for (let i = 1; i <= (nodeCount + 1); i++) {//遍历边的长度加1 
    parent[i] = i; //做一个初始化 
  }
  let conflict = - 1;// 来记录是否产生了双重父节点的情况；
  let cycle = -1;// 来记录是否产生了环路； 
  for (i in edges) {
    let edge = edges[i];
    let node1 = edge[0], node2 = edge[1];//拿到两个节点 
    if (parent[node2] != node2) { //node2这个节点有两个父节点 
      conflict = i;//这是第几组数据，把他拿下来 
    } else { //否则就是没有父节点，就把他们连起来
      parent[node2] = node1;
      if (uf.find(node1) == uf.find(node2)) { //产生环路
        cycle = i;
      } else {
        uf.merge(node1, node2); //两种情况都没有，就给他们连起来 
      }
    }
  } if (conflict < 0) { //没有双重父节点产生，就把环路给记录下来； //只有环 
    return edges[cycle];
  } else { // 有双重父节点产生 
    let conflictEdge = edges[conflict]; //有两个入度的点，此时判断有无环 
    if (cycle >= 0) {
      return [parent[conflictEdge[1]], conflictEdge[1]]
    } else {
      return conflictEdge;
    }
  }
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
