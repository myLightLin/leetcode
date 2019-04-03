/**
 * @param {number[]} nums
 * @return {boolean}
 */

// O(n²)
var containsDuplicate = function(nums) {
for(let i = 0; i < nums.length; i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i] == nums[j]){
            return true
        }
    }
}
return false;
};

// O(n)
var containsDuplicate = function(nums) {
    let obj = {};
    for(let i=0;i<nums.length;i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if((obj[nums[i]]) > 1){
            return true;
        }
    }
    return false;
};