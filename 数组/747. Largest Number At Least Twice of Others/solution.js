/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max = 0;
    let second = 0;
    let index = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] > max){
            second = max;
            max = nums[i];
            index = i;
        }else if(nums[i] > second){
            second = nums[i];
        }
    }
    return second * 2 <= max ? index : -1;
};