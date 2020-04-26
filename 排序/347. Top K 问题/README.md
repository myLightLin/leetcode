# 题目
给定一个非空的整数数组，返回出现次数 topK 的元素
> Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Input: nums = [1], k = 1
Output: [1]

# 思路
## 解法1
使用 map 数据结构存储每个元素出现的次数，此时我们知道了每个元素各自出现的次数，再使用 Array.from 将 map 转换为二维数组然后根据
num - count 形式对出现次数 count 进行从大到小的排序，只需在 sort 传入一个比较函数即可。最后从数组中取出前 k 个元素即得结果。
## 解法2
同样先用 map 存储每个元素以及它们的出现次数，并且设置一个 maxFreq 变量存储最大的出现次数。接着构建一个 maxFreq+1 大小的数组，然后利用桶的思想，
每个桶存放的是出现次数相同的元素，分别对应它们的下标，比如数组下标为 3 中存放着所有出现次数为 3 的元素。最后遍历这个数组，根据 k 的大小取出相应元素即可。

# JavaScript 解法
解法1
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 解法1 - map
var topKFrequent = function(nums, k) {
    let map = new Map();
    nums.forEach((num) => map.set(num, map.get(num) + 1 || 1));
    let arrObj = Array.from(map);
    arrObj.sort(function(a,b){
        return b[1] - a[1];
    });
    let res = [];
    for(var i=0;i<k;i++){
        res.push(arrObj[i][0]);
    }
    return res;
};
```
解法2
```
var topKFrequent = function(nums, k) {
  let map = new Map();
  let maxFreq = 0;
  for(let i=0;i<nums.length;i++){
      const freq = map.get(nums[i]) + 1 || 1;
      map.set(nums[i], freq);
      maxFreq = Math.max(maxFreq, freq);
  }
  let bucket = new Array(maxFreq + 1)
  for(const n of map.keys()){
      let count = map.get(n);
      if(bucket[count] === undefined){
          bucket[count] = []
      }
      bucket[count].push(n)
  }
  let res = []
  for(let i=bucket.length-1;i>=0 && k > 0; i--){
      if(bucket[i] !== undefined){
          while(bucket[i].length && k > 0){
              res.push(bucket[i].shift())
              k--;
          }
      }
  }
  return res
};
```
