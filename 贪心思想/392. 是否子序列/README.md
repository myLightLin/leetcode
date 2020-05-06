# 题目
给定字符串 s 和 t, 判断 s 是否是 t 的子序列。
> Input: s = "abc", t = "ahbgdc"
Output: true.

# 思路
遍历字符串 s ，再使用 indexOf 方法在 t 中进行查找，如果查找到的为 -1，则返回 false。继续缩小 t 的范围进行下一个字符查找。如果都验证通过，返回 true

# JavaScript 解法
```
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    for(var i=0;i<s.length;i++){
        var index = t.indexOf(s.charAt(i))
        t = t.slice(index + 1);
        if (index == -1) return false;
    }
    return true;
};
```
