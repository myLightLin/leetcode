/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (k < 0) {
    return 0;
  }
  
  const numMap = new Map();
  
  for (let num of nums) {
    if (numMap.has(num)) {
      numMap.set(num, numMap.get(num) + 1);
    } else {
      numMap.set(num, 1);
    }
  }  
  
  let totalPairs = 0;
  for (let [num, count] of numMap.entries()) {
    if (k === 0) {
      if (numMap.get(num) >= 2) {
        ++totalPairs;
      }
    } else if (numMap.has(num + k)) {
      ++totalPairs;
    }
  }
  
  return totalPairs;
};