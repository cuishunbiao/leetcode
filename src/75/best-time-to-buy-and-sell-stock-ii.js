/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    if (!prices.length) return;

    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            result += prices[i] - prices[i - 1] // 第一次卖出
        }
    }
    return result

    // 每次都更新一下最小筹码
    // currentHold = Math.min(currentHold, prices[i])
};
const prices = [1, 5, 3, 6, 9]
console.log(maxProfit(prices));