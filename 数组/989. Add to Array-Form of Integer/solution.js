/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
    let res = [];
    for (let i = A.length - 1; i >= 0; i--) {
        res.unshift((A[i] + K) % 10);
        K = (A[i] + K) / 10 | 0;
    }
    while (K > 0) {
        res.unshift(K % 10);
        K = K / 10 | 0;
    }
    return res;
};