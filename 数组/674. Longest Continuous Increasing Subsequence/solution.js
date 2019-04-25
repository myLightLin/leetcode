/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 1;
    let lm = 1;
    if(nums.length == 0) return 0;
    if(nums.length == 1) return 1;
    for(let i=1;i<nums.length;i++){
        lm = nums[i] > nums[i - 1] ? lm+1: 1;
        max = lm > max?lm:max;
    }
    return max;
};