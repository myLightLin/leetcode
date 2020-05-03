/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    if (points.length == 0) return 0;
    let n = points.length;
    let i = 0;
    let cnt = 0;
    points.sort((a, b) => a[0] - b[0]);
    while (i < n) {
        let left = points[i][0],
            right = points[i][1];
        i++;
        while (i < n && points[i][0] <= right && points[i][1] >= left) {
            left = Math.max(left, points[i][0]);
            right = Math.min(right, points[i][1]);
            i++;
        }
        cnt++;
    }
    return cnt;
};

// 解法2
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