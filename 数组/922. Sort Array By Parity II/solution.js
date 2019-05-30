/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var result = A.slice();
    var even = 0,odd = 1;
    for(var i=0;i<A.length;i++){
        if(A[i] % 2 == 0){
            result[even] = A[i];
            even += 2;
        }else{
            result[odd] = A[i];
            odd += 2;
        }
    }
    return result;
};