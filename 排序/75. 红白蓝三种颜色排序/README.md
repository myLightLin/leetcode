# 题目
给定一个 n 个元素组成的数组，元素由红、白、蓝三种颜色，在数组中分别表示为 0 1 2。要求按红(0)白(1)蓝(2)的颜色顺序进行排序。
> Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

# 思路
使用三个变量 left、i、right 分别代表三个挡板，将数组元素划分为四个区域，分别是存放红色的区域，存放白色的区域，待遍历的元素区域，存放蓝色的元素区域
示例 0 0 | 1 1 | × × × | 2 ，其中 | 代表挡板，× 代表待遍历的元素，以确定将其放到哪个区域。当数组的元素等于 0 时，移动元素到挡板最前面，同时将left
挡板前移；当数组元素等于 1 时，直接移动 i 挡板；当数组元素等于 2 时，蓝色要放到最后面，此时交换 right 的值并将 right 挡板向前移。遍历的终止条件是当
i 小于等于数组最后一个元素时，此时已经遍历完毕。

# JavaScript 解法
解法1
```
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
```
解法2
```
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let index = 0;
    while(index <= end && start < end){
        if(nums[index] == 0){
            nums[index] = nums[start];
            nums[start] = 0;
            start++;
            index++;
        } else if(nums[index] == 2){
            nums[index] = nums[end]
            nums[end] = 2;
            end--;
        } else {
            index++;
        }
    }
};
```
