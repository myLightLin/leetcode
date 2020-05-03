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