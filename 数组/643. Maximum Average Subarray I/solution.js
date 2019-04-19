/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    var sum = 0;
    for(var i=0;i<k;i++){
        sum += nums[i];
    }
    var max = sum;
    for(var i=k;i<nums.length;i++){
        sum += nums[i] - nums[i - k];
        max = Math.max(sum,max);
    }
    return max / k;
};