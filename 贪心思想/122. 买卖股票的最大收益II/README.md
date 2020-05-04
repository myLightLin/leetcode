# 题目
跟一道题一样，有一个数组，数组里的每个数值分别代表第 i 天里股票的价格。但是现在规则变了，每天可以多次交易，求卖出股票的最大收益。
> Input: Input: [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

# 思路
这是前一道题的变种，现在可以多次进行股票交易。可以把数组中的股票价格想象成一个陡峭的抛物线形状，类似山峰。现在要求的是多次交易的最大收益，那我们就要找出山峰的
峰顶和谷底，然后用峰顶的价格减去谷底的价格，得到的就是最大差价，再继续寻找新的峰顶和谷底，直到数组遍历结束，这样累加后的结果就是最大收益。

# JavaScript 解法
```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let i = 0;
    let min = prices[0];
    let max = prices[0];
    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
            i += 1;
        }
        min = prices[i];
        while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
            i += 1;
        }
        max = prices[i];
        maxProfit += (max - min);
    }
    return maxProfit;
};
```
