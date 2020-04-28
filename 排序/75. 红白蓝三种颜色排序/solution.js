/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = -1;
    let i = 0;
    let right = nums.length;
    while(i < right){
        if(nums[i] == 0){
            swap(nums, i++, ++left);
        }else if(nums[i] == 1){
            i++;
        }else{
            swap(nums, i, --right);
        }
    }
};

function swap(arr, i, j){
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}