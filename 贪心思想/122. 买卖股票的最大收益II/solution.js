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