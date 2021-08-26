/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    const dp = new Array(n + 1);
    dp[0] = dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        const dpi1 = dp[i - 1]
        const costi1 = cost[i - 1]
        const dpi2 = dp[i - 2]
        const costi2 = cost[i - 2]
        dp[i] = Math.min(dpi1 + costi1, dpi2 + costi2)
    }
    return dp[n]
};
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))