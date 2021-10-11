/*
 * @lc app=leetcode.cn id=721 lang=javascript
 *
 * [721] 账户合并
 */

// @lc code=start
/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const emailToIndex = new Map();
  const emailToName = new Map();
  let emailsCount = 0;
  for (const account of accounts) {
    const name = account[0];
    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      if (!emailToIndex.has(email)) {
        emailToIndex.set(email, emailsCount++);
        emailToName.set(email, name);
      }
    }
  }
  const uf = new UnionFind(emailsCount);
  for (const account of accounts) {
    const firstIndex = emailToIndex.get(account[1]);
    for (let i = 2; i < account.length; i++) {
      const nextIndex = emailToIndex.get(account[i]);
      uf.merge(firstIndex, nextIndex);
    }
  }
  const indexToEmails = new Map();
  //K是并查集祖先坐标 v是邮箱集合，如果坐标当作k，那么 我们如何拿到k
  for (const email of emailToIndex.keys()) {
    //从emailToIndex拿坐标，所有的邮箱就拿 到了，拿到每一个邮箱
    const index = uf.find(emailToIndex.get(email));
    //拿到祖先的坐标 
    const account = indexToEmails.get(index) ? indexToEmails.get(index) : [];
    //拿坐标
    account.push(email);
    //把邮箱添加完 
    indexToEmails.set(index, account);
    //根据祖先节点分好组 
  }
  //做用户之间的合并
  const merged = [];
  //建一个数组 
  for (const emails of indexToEmails.values()) {
    //获取到邮箱的集合，合并之前要按着 ascll进行排序 
    emails.sort();
    const name = emailToName.get(emails[0]);// 拿到名称 
    const account = [];// 
    account.push(name);// 添加名字 
    account.push(...emails);// 添加邮箱 
    merged.push(account);//把数组集合添加进去 
  }
  return merged;//完成用户之间的合并
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

