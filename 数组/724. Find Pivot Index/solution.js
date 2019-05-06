/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let left = 0,right = 0,sum = 0;
    nums.forEach(function(value){
        sum += value;
    })
    right = sum;
    for(let i = 0;i < nums.length;i++){
        right -= nums[i];
        if(left == right){
            return i;
            break;
        }
        left += nums[i];
    }
    return -1;
};