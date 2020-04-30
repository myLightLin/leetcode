# 题目
给定一组区间，找到最小的可删除个数，使得各个区间互相不重叠。
> Input: [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
Input: [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.

# 思路
要让各个区间不重叠，就要想办法判断第一个区间的末尾和第二个区间的开始，它们之间的大小关系。为了更好地进行间隔判断，首先按照区间末尾对
各个数进行从小到大的排序。然后以每个区间的末尾为标记，如果下个区间的开始比上个区间的末尾还小，说明发生了重叠，那么 continue 继续下次
比较；否则，说明不重叠，就统计加 1 并且更新这个区间的末尾为最新的标记，然后继续跟下个区间的开头做比较。直到遍历完数组，我们就可以统计
出总共有多少个**不重叠的区间**，但题目要求的是能够删除的最小区间，所以用数组总长度减去不重叠的区间个数就可以求得结果。

# JavaScript 解法
解法1
```
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    if (intervals.length === 0) return 0
    intervals.sort(function (a, b) {
        return a[1] - b[1];
    });
    let cnt = 1;
    let end = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            continue;
        }
        end = intervals[i][1];
        cnt++;
    }
    return intervals.length - cnt;
};
```
