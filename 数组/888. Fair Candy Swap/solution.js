/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA = 0;
    let sumB = 0;
    A.forEach((v) => {
        sumA += v;
    });
    B.forEach((v) => {
        sumB += v;
    });
    const mid = (sumA + sumB) >> 1;   // 取平均值
    const setB = new Set(B);
    for(let i=0;i<A.length;i++){
        const curr = A[i];
        const other = sumA - curr;
        const item = mid - other;
        if(setB.has(item) && sumB - item + curr == mid){
            return [A[i], item];
        }
    }
};