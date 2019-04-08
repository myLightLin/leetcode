/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 第一种解法
    for(var i=0;i<nums.length;i++){
        for(var j=i+1;j<nums.length;j++){
            if(nums[i] == 0){
                swap(nums,i,j);
            }
        }
    }
};
function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 第二种解法
var moveZeroes = function(nums) {
    for(var i=nums.length;i--;){
        if(nums[i] == 0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
};

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]