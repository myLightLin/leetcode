# 题目
有若干个气球分布在水平坐标系内，对每个气球来说，有一个坐标区间，表示气球的所占位置。如果飞镖射中一个区间，这个区间内的气球就能被刺破。现在需要解决的是，如何用最小的飞镖来尽可能多的刺破气球，
比如下面的例子中，[2, 8] 与 [1, 6] 这两个区间存在重叠，那么只用 1 个飞镖就能同时把这两气球刺破，另外两个区间也存在重叠，也需要 1 个飞镖。所以最小需要 2 个飞镖来把下面这组气球刺破，最后输
出的结果是 2 .
> Input:
[[10,16], [2,8], [1,6], [7,12]]
Output:
2
Explanation:
One way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).

# 思路
这个问题跟 [435] 题非重叠子区间很像，现在要找出非重叠的区间有多少个，那就需要多少个飞镖来解决。而且要注意的是，两个区间相邻的话也算是重叠子区间了，比如 [1, 2] 和 [2, 3] 只需要一个飞镖就可以
同时解决两个气球，所以跟 [435] 题的区别点在此。

# JavaScript 解法
```
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length == 0) return 0;
    let cnt = 1;
    points.sort((a, b) => a[1] - b[1]);
    let end = points[0][1];
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] <= end) {
            continue;
        }
        end = points[i][1];
        cnt++;
    }
    return cnt;
};
```
