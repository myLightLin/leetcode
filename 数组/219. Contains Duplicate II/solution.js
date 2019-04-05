/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // 使用散列表存储 key 以及 value ，仅需要 72 ms
    let cbj = {};
    for(let i = 0; i < nums.length; i++){
        if(nums[i] in cbj && (i - cbj[nums[i]]) <= k){
            return true;
        }
        cbj[nums[i]] = i;
    }
    return false;
};

// 时间复杂度太高, 1224 ms
var containsNearbyDuplicate = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i] == nums[j]){
                if(Math.abs(i - j) <= k){
                    return true;
                }
            }
        }
    }
    return false;
};