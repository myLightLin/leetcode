题目要求给定一个数组，判断数组中最大的数是否是数组其它元素的两倍以上，是的话返回该数的索引，否则返回 -1 。<br>
解决思路是维护三个变量 max ,second, index 分别代表最大的数，第二大的数以及最大数的索引，然后遍历数组，找出数组<br>
中最大的数以及第二大的数及最大数的索引。然后判断 second 乘以 2 是否小于最大数，如果是说明是它的两倍以上，否则返回 -1 。<br>

发现两个可用的方法：find() 和 findIndex() 。 findIndex() 方法返回提供的回调函数第一个符合值的**索引**，而 find() 返回的是**值** .
所以可以直接 Math.max 找出数组的最大值，在用 findIndex() 找这个最大值的索引。同样用 Math.max 找剔除最大值后的数组，也就是第二大的值，
然后判断求结果。
