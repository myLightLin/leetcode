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

// 解法2 - 桶
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