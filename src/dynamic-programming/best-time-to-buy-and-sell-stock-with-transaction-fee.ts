/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 * 
 * 状态转移关注点在于：每一个的当前状态；
 * [1,2,3,4,5] ：先关注 1 的状态，再关注 2 的状态
 * 买入和卖出两种状态，并判断交易次数
 * 
 * dp[i][0] = 手里没有股票
 * dp[i][1] = 手里有股票
 * 
 * 第 0 天交易结束的时候 dp[0][0]=0 和 dp[0][1] = −prices[0] 两种状态
 * 第 1 天交易结束的时候 同理；
 * 
 * 
 */
// var maxProfit = function (prices, fee) {
//     const n = prices.length;
//     if (!n) return 0
//     let dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
//     //初始化第一天结束时的交易结果
//     dp[0][0] = 0;
//     dp[0][1] = -prices[0];
//     for (let i = 1; i < n; i++) {
//         //第 i 天，获取前一天持有股票的最大值，
//         dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i] - fee)
//         dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
//     }
//     return dp[n - 1][0]
// };
var maxProfit = function (prices, fee) {
    const n = prices.length;
    if (!n) return 0
    let dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
    //初始化第一天结束时的交易结果
    let [sell, buy] = [0, -prices[0]]
    for (let i = 1; i < n; i++) {
        //第 i 天，获取前一天持有股票的最大值，
        [sell, buy] = [Math.max(sell, buy + prices[i] - fee), Math.max(buy, sell - prices[i])]
    }
    return sell
};
console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))