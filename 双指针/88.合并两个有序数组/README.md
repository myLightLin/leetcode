# 题目
给定两个已排序数组 num1 和 num2, 将 num2 合并到 num1 使之成为一个有序数组，无需返回值，直接修改 num1 数组。
> Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

# 思路
使用尾插法，定义两个指针 i 和 j，分别指向 num1 和 num2 数组已排序的末尾，从后往前遍历。将较大的值挑出来赋值到 num1 数组的末尾，下标是 m + n - 1，依次递减。
然后将 i 或 j 指针往前移，直到其中一方指针指向的下标为负，即将另一方的值依次赋值到剩余的位置中。当两边的指针指向的下标都为负时，循环终止。

# JavaScript 解法
```
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
var merge = function(nums1, m, nums2, n) {
    var index1 = m - 1; // 指针1
    var index2 = n - 1;  // 指针2
    var indexMerge = m + n - 1;  // 从后往前的下标值
    while(index1 >= 0 || index2 >= 0) {
        if(index1 < 0) {
            nums1[indexMerge--] = nums2[index2--]
        } else if (index2 < 0) {
            nums1[indexMerge--] = nums1[index1--]
        } else if (nums1[index1] > nums2[index2]) {
            nums1[indexMerge--] = nums1[index1--]
        } else {
            nums1[indexMerge--] = nums2[index2--]
        }
    }
}
```
