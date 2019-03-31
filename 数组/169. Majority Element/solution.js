/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {};
    let m = nums.length / 2;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in obj){
            obj[nums[i]] += 1;
        }else{
            obj[nums[i]] = 1;
        }
    }
    for(i in obj){
        if(obj[i] > m) return i;
    }
};