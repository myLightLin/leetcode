# 题目
现在有若干饼干要分给熊孩子，每个孩子对饼干的满足程度不一样，比如孩子A要3块饼干才能满足，孩子B只需1块饼干就满足。要求尽可能满足**更多**的孩子。
> Input: [1,2,3], [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.

# 思路
首先要对题目给定的孩子饼干满足程度和已有的饼干块个数进行排序。那么想要尽可能多的满足孩子，就要先满足最小胃口的孩子，这样就有大的饼干去满足更大胃口的
孩子。也即先把胃口小的孩子先给饼干吃，凑出更多人数，这就是贪心思想。解法就是遍历数组，判断饼干数是否大于等于孩子的胃口数，按照顺序来比较，如果是，那
人数就加 1 ，直到饼干分完。

# JavaScript 解法
解法1
```
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a - b);
    s.sort((a,b) => a - b);
    let j = 0;
    s.forEach(function (v){
        if(v >= g[j]){
            j++;
        }
    })
    return j;
};
```
