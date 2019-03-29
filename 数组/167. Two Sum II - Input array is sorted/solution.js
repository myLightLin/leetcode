/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 自己做的，时间复杂度太高。。
var twoSum = function(numbers, target) {
    for(let i=0;i<numbers.length;i++){
      for(let j=0;j<numbers.length;j++){
        if(numbers[i] + numbers[j] == target){
          return [i+1,j+1];
        }
      }
    }
};


// 参考讨论区写的二叉查找，时间复杂度低了好多
var twoSum = function(numbers, target) {
    let 
        re = [],
        left = 0, 
        right = numbers.length - 1;
    while(left < right){
        let v = numbers[left] + numbers[right];
        if(v == target){
            re[0] = left + 1;
            re[1] = right + 1;
            break;
        }else if (v > target){
            right--;
        }else{
            left++;
        }
    }
    return re;
};