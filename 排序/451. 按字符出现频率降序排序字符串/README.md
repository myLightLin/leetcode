# 题目
给定一个字符串，按字符出现的频率进行降序排序，字符区分大小写。
> Input:
"tree"
Output:
"eert"
Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

# 思路
## 解法1
常规解法，先使用 hashMap 存储字符串中每个字符出现的次数，然后转换为数组按次数进行降序排序。最后遍历数组，将每个字符以及它出现的次数连接起来，
得到最终结果，可使用 `repeat()` 函数来重复字符次数。
## 解法2
利用桶排序思想。先用 hashmap 存储各个字符及其出现次数，然后使用数组来模拟桶，每个数组下标对应每个桶，每个桶中存放出现次数相同的字符，如下标为
2 的位置存放的是出现次数为 2 的字符。最后遍历数组中每个元素，由于下标正好对应出现次数，因此两层 for 循环即可得到最终的排序字符串。

# JavaScript 解法
解法1
```
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for(let i=0;i<s.length;i++){
        const ch = s.charAt(i);
        map.set(ch, map.get(ch) + 1 || 1);
    }
    let arrObj = Array.from(map);
    arrObj.sort(function(a, b){
        return b[1] - a[1];
    })
    let res = '';
    for(var i=0;i<arrObj.length;i++){
        res += (arrObj[i][0]).repeat(arrObj[i][1])
    }
    return res;
};
```
解法2 - 桶排序
```
/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for(let i=0;i<s.length;i++){
        const ch = s.charAt(i);
        map.set(ch, map.get(ch) + 1 || 1);
    }
    // return res;
    let bucket = new Array(s.length + 1);
    for(const key of map.keys()){
        const c = map.get(key)
        if(bucket[c] === undefined){
            bucket[c] = []
        }
        bucket[c].push(key);
    }
    let res = '';
    for(let i=bucket.length-1;i>=0;i--){
        if(bucket[i] === undefined) continue;
        for(let str of bucket[i]){
            for(let j=0;j<i;j++){
                res += str;
            }
        }
    }
    return res;
};
```
