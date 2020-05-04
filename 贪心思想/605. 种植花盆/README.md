# 题目
假设有一个很长的花圃，里面有些地是种植的，有些没有，花盆在种植的时候不能相邻，因为会竞争水和阳光导致都枯死掉。现在给你一个数组 和一个整数 n，数组中的元素都是 0 和 1，
0 代表可种植，1 代表已经种了花盆。n 代表想要新种植的花盆，求 n 是否能被种植进花圃。
> Input: flowerbed = [1,0,0,0,1], n = 1
Output: True
Explanation: n 为 1 表示有一个花盆待种植，而现在还有三个 0 空地可以种，符合不相邻规则，所以返回 true

# 思路
使用两个变量 prev 和 next，分别记录当前花盆的前一个和后一个，如果当前遍历到的是 0 也就是可种植的，那么就判断 prev 和 next 是否也是 0 ，是的话表示可以种植，count++
最后判断 count 是否等于 n ，说明可以种植进去。

# JavaScript 解法
```
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    for(let i=0;i<flowerbed.length && count < n;i++){
        if(flowerbed[i] === 0){
            let prev = i === 0 ? 0 : flowerbed[i-1]
            let next = i === flowerbed.length - 1 ? 0 : flowerbed[i+1]
            if(!next && !prev){
                flowerbed[i] = 1
                count++;
            }
        }
    }
    return count === n;
};
```
