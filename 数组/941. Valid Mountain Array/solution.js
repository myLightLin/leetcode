/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A.length < 3) return false;
    var prev = A[0];
    var index = 1;
    var increase = 0;
    var decrease = 0;
    
    while (prev < A[index]) {
        prev = A[index];
        increase++;
        index++;
    }
    
    while (prev > A[index]) {
        prev = A[index];
        decrease++;
        index++;
    }
    
    return index === A.length && increase > 0 && decrease > 0;
};