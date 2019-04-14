/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var n = nums.length, beg = -1, end = -2, min = nums[n-1], max = nums[0];
    for (var i=1;i<n;i++) {
      max = Math.max(max, nums[i]);
      min = Math.min(min, nums[n-1-i]);
      if (nums[i] < max) end = i;
      if (nums[n-1-i] > min) beg = n-1-i; 
    }
    return end - beg + 1;
};