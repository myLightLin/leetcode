这道题给定一个数组，让你找出数组中从 1 到 n（数组长度） 缺失的数。数组的元素可以有多个重复。这是上次那道的变形，数据乱序且重复了。

先申请新数组arr,然后遍历添加 1 到 n 。再遍历题目给定数组，把在 arr 中出现的数置为 -1 。最后 filter 函数筛选出 arr 中大于 0 的数，
则为所求。
