/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  const res = [];
	let i = 0;
	let j = 0;
	while (i < firstList.length && j < secondList.length) {
		const start = Math.max(firstList[i][0], secondList[j][0]); // 交集区间的左端，取它们的较大者
		const end = Math.min(firstList[i][1], secondList[j][1]); // 交集区间的右端，取它们的较小者
		if (start <= end) {       // 形成了交集区间
			res.push([start, end]);
		}
		if (firstList[i][1] < secondList[j][1]) {  // 谁先结束，谁的指针就步进，考察下一个子区间
			i++;
		} else {
			j++;
		}
	}
	return res;
};
// @lc code=end

