/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if(N <= 1) return N;
    let a = 0,b = 1;
    while(N-- > 1){
        let sum = a + b;
        a = b;
        b = sum;
    }
    return b;
};

// 第二种解法，递归。
var fib = function(N) {
    if(N == 0) return 0;
    if(N == 1) return 1;
    else return fib(N - 1) + fib(N - 2);
};