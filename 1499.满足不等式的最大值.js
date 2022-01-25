/*
 * @lc app=leetcode.cn id=1499 lang=javascript
 *
 * [1499] 满足不等式的最大值
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
  let len = points.length, max = -Infinity, queue = [];
  for (let j = 0; j < len; j++) {
    let [xj, yj] = points[j];
    while (queue.length > 0 && xj - queue[0][0] > k) queue.shift();
    // 更新最大值 
    if (queue.length > 0) {
      max = Math.max(queue[0][1] - queue[0][0] + xj + yj, max);
    }
    // 在把当前的 points[j] push 加入到队尾之前，把队列尾部比 points[j] 的 yj-xj 
    // 小的元素 pop 掉，保证队列单调递减 
    while (queue.length > 0 && (queue[queue.length - 1][1] - queue[queue.length - 1][0]) < (yj - xj)) queue.pop();
    queue.push(points[j]);
  }
  return max;
};
// @lc code=end

