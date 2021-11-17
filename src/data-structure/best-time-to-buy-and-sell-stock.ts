/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxResult = 0
    for (let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i])
        const result = prices[i] - minPrice
        maxResult = Math.max(maxResult, result)
    }
    return maxResult
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
