# 题目
现在有一个随机的列表，列表里存储了每个人的升高信息和排序信息，比如 [7, 0] 表示此人身高是 7，前面有 0 个人身高大于等于他。现在写个程序按照这个规则来重建队列。
> Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]

# 思路
一开始看这个题目一头雾水，不知道是怎么个规则。然后看了下 discuss 里的帖子才知道是要把一个乱序的列表给排成一个有序的列表，怎么个拍法呢？题目说了，第二个数 k 表示
前面有几个人身高大于等于它，那么按照这个规则， 我们应该尽可能地让身高高的排在前面，否则身高矮的再插入到数组里的话，又要移动 k 的位置，因为前面又有人比它高。所以
思路是对原数组按照身高进行降序排列，如果身高相同，再按照位置 k 进行升序排列。对 JS 来说，sort 方法可以传入一个比较函数，而 splice 方法可以很好的移动数组里的元素。

# JavaScript 解法
```
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    people.sort(sortPeople);
    var i;
    var res = [];
    for (i = 0; i < people.length; i++) {
        res.splice(people[i][1], 0, people[i]);
    }
    return res;
};

/*
 * 如果身高不等，就按身高降序排列，否则按照 k 升序排列
 */
var sortPeople = function (a, b) {
    if (a[0] != b[0]) {
        return b[0] - a[0];
    } else {
        return a[1] - b[1];
    }
}
```
