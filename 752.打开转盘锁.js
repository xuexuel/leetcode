/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  let path = '0000';
  const queue = [path];
  const visited = {};
  const dead = {};
  let step = 0;
  const swipeUp = (path, index) => {
    const arr = path.split('');
    if (arr[index] === '9') {
      arr[index] = '0';
    } else {
      arr[index]++;
    }
    return arr.join('');
  };
  const swipeDown = (path, index) => {
    const arr = path.split('');
    if (arr[index] === '0') {
      arr[index] = '9';
    } else {
      arr[index]--;
    }
    return arr.join('');
  };
  for (let num of deadends) {
    dead[num] = true;
  }
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const password = queue.shift();
      if (dead[password]) continue;
      if (password === target) return step;
      for (let j = 0; j < 4; j++) {
        const upPassword = swipeUp(password, j);
        const downPassword = swipeDown(password, j);
        !visited[upPassword] && queue.push(upPassword) && (visited[upPassword] = true);
        !visited[downPassword] && queue.push(downPassword) && (visited[downPassword] = true);
      }
    }
    step++;
  }
  return -1;
};
// @lc code=end

