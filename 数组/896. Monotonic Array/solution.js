/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let inc = 1;
    let dec = 1;
    for (let i=1;i<A.length;i++) {
        if(A[i] > A[i - 1]){
            inc += 1;
        }else if (A[i] < A[i - 1]) {
            dec += 1;
        }else {
            inc += 1;
            dec += 1;
        }
    }
    return inc == A.length || dec == A.length;
};