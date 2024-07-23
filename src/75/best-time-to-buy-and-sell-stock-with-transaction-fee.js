/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
// var maxProfit = function (prices, fee) {
//     if (!prices.length) return 0
//     debugger
//     // 如果第一天买入股票，则初始值为负的股票价格
//     let hold = -prices[0]
//     let notHold = 0 // 不持有股票时的最大利润，初始值为 0，第一天不操作，利润是 0；

//     // 从第二天遍历数组，处理每天的状态
//     for (let i = 1; i < prices.length; i++) {
//         // 保存前一天的状态
//         let prevHold = hold;
//         let prevNotHold = notHold;

//         // 更新持有股票的最大利润
//         hold = Math.max(prevHold, prevNotHold - prices[i]);

//         // 更新不持有股票的最大利润
//         notHold = Math.max(prevNotHold, prevHold + prices[i] - fee);
//     }

//     return Math.max(hold, notHold)
// };
const maxProfit = (prices, fee) => {
    let cash = 0;
    let hold = -prices[0];
    console.log(`初始状态：现金 = ${cash}，持有 = ${hold}`);

    for (let i = 1; i < prices.length; i++) {
        let prevCash = cash;
        let prevHold = hold;

        // 更新现金：选择是否卖出股票
        cash = Math.max(cash, hold + prices[i] - fee);
        console.log(`\n第 ${i} 天，价格 = ${prices[i]}`);
        console.log(`更新现金：max(${prevCash}, ${prevHold} + ${prices[i]} - ${fee}) = ${cash}`);

        // 更新持有：选择是否买入股票
        hold = Math.max(hold, cash - prices[i]);
        console.log(`更新持有：max(${prevHold}, ${prevCash} - ${prices[i]}) = ${hold}`);
    }

    return cash;
}
const prices = [1, 3, 7, 5, 10, 3], fee = 3
console.log(maxProfit(prices, fee));