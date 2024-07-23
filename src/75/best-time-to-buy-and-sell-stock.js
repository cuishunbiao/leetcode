/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let totalProfit = 0
    let minPrice = Infinity
    for (let i = 0; i < prices.length; i++) {
        totalProfit = Math.max(totalProfit, prices[i] - minPrice)
        minPrice = Math.min(minPrice, prices[i])
    };
    return totalProfit
}

const prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices));