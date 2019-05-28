/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let newArr = [];
    let begin = 0;         // 也可不用变量，使用数组的 push 和 unshift 方法
    let end = A.length - 1;
    for(let i = 0; i < A.length; i++){
        if(A[i] % 2 != 0){
            newArr[end] = A[i];
            end--;
        }else{
            newArr[begin] = A[i];
            begin++;
        }
    }
    return newArr;
};