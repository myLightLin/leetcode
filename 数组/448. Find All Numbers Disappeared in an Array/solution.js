/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let arr = [];
    let len = nums.length;
    for(let i=0;i<len;i++){
        arr[i] = i + 1;
    }
    for(v of nums){
        arr[v - 1] = -1;
    }
    return arr.filter((i) => i > 0);
};