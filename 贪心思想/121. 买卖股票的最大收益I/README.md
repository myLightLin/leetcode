# 题目
现在有一个数组，数组里的每个数值分别代表第 i 天里股票的价格。如果只有一次交易的机会，请求出能获取的最大收益。
> Input: [7,1,5,3,6,4]<br>
Output: 5<br>
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.Not 7-1 = 6, as selling price needs to be larger than buying price.

# 思路
因为题目说明了只有一次交易机会，所以我们只需遍历数组，找到一个最小的价格，然后买入，再判断当前价格减去最小价格是不是最大收益，记录这个收益即可。

# JavaScript 解法
```
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let n = prices.length;
    if (n == 0) return 0;
    let minBuy = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < n; i++) {
        if (minBuy > prices[i]) minBuy = prices[i]
        else maxProfit = Math.max(maxProfit, prices[i] - minBuy);
    }
    return maxProfit;
};
```
