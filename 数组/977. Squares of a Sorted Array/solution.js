/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    for(var i=0;i<A.length;i++){
        A[i] = A[i] ** 2;
    }
    A.sort((a,b) => a - b);
    return A;
};