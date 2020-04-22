# 题目
给定一个字符串和一个字符串数组，找出一个字符串，该字符串可以通过删除给定字符串中的字符得到，如果有多个，则返回最大长度，最小字典序。若无，返回 '';

> Input:
s = "abpcplea", d = ["ale","apple","monkey","plea"]
Output:
"apple"

# 思路
解题的关键是字符串的子序列。即在 d 里面找出是 s 的字符串并且符合最大长度最小字典序。那么首先可以封装一个比较 target 是否是 s 的子字符串的函数，然后去遍历
数组 d 里面的每一个元素，找出 s 的子串，赋给 res 变量，res 存储的就是结果值；在接下来的遍历中，如果 res 比当前元素还要小或者长度更大，那么就不需比较，直接
跳过遍历下一个元素。最终得到 res 就是最长的子串。

# JavaScript 解法
```
/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  let res = '';
  for(let dict of d){
    let l1 = res.length;
    let l2 = dict.length;
    if(l1 > l2 || (l1 === l2 && res.localeCompare(dict) < 0)){
      continue;
    }
    if(isSubstr(s, dict)){
      res = dict;
    }
  }
  return res;
};
/**
 * @param {string} str
 * @param {string} target
 * @return {boolean}
 */
function isSubstr(str, target) {
  let i = j = 0;
  while(i < str.length && j < target.length){
    if(str.charAt(i) === target.charAt(j)){
      j++;
    }
    i++;
  }
  return j === target.length;
}
```
