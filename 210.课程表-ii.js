/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let inDegree = new Array(numCourses).fill(0);
  const map = {}, queue = [];
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++;
    if (map[prerequisites[i][1]]) map[prerequisites[i][1]].push(prerequisites[i][0])
    else map[prerequisites[i][1]] = [prerequisites[i][0]]
  }
  for (let i = 0; i < inDegree.length; i++) if (inDegree[i] == 0) queue.push(i);
  let cnt = 0,ans=[];
  while (queue.length) {
    const selected = queue.shift();
    ans.push(selected);
    cnt++;
    const toEnQueue = map[selected];
    if (toEnQueue && toEnQueue.length) {
      for (let i = 0; i < toEnQueue.length; i++) {
        inDegree[toEnQueue[i]]--;
        if (inDegree[toEnQueue[i]] == 0) queue.push(toEnQueue[i]);
      }
    }
  }
  if (ans.length == numCourses) return ans;
  return [];
};
// @lc code=end

