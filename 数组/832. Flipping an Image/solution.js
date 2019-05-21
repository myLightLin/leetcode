/**
 * @param {number[][]} A
 * @return {number[][]}
 */

// 评论区大佬简单粗暴的做法
var flipAndInvertImage = function(A) {
    return A.map(row => row.reverse().map((v) => v ^ 1));
};


// 常规
var flipAndInvertImage = function(A) {
    for(let i=0;i<A.length;i++){
        A[i] = A[i].reverse().map((v) => (v == 0) ? 1 : 0);
    }
    return A;
};