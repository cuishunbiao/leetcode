/**
 * 买卖股票的最佳时机 III 
 * 一共四个状态，状态转移
 * 
 * buy1 = 第一次买入，必然是负值
 * sell1 = 第一次的卖出，buy1是负值需要「收入」卖出的股票价格
 * buy2 = 第二次的买入，拿到第一次的利润后，再「出钱」购买股票
 * sell2 = 第二次买入剩余的钱，与「卖出」第二次买入的股票
 * 
 */
const maxProfitFn = function (prices) {
    const n = prices.length;
    if (!n) return 0
    let buy1 = -prices[0], buy2 = -prices[0]
    let sell1 = 0, sell2 = 0;
    for (let i = 0; i < n; i++) {
        buy1 = Math.max(buy1, -prices[i])
        sell1 = Math.max(sell1, buy1 + prices[i])
        buy2 = Math.max(buy2, sell1 - prices[i])
        sell2 = Math.max(sell2, buy2 + prices[i])
    }
    return sell2
}
console.log(maxProfitFn([1, 2, 4]));
