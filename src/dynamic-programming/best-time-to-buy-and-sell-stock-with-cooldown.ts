/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 动态转移方程
 * 把每个状态都存在数据维度里操作；
 * 每天都有三种状态
 * dp[i][0] = 不持股且当天没卖出
 * dp[i][1] = 持股，最大收益
 * dp[i][2] = 不持股且当天卖出了
 * 
 */
var maxProfit = function (prices) {
    if (!prices.length) return 0
    let n = prices.length;
    let dp = new Array(n).fill(0)
    dp[0][0] = -prices[0];//还未买入，先代表负债
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
        dp[i][1] = dp[i - 1][0] + prices[i]
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2])
    }
    return Math.max(dp[n - 1][1], dp[n - 1][2])
};