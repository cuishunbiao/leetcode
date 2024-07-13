/**
 * @param {number[]} cost
 * @return {number}
 * work style: minCost(i) = cost[i] + min(minCost(i+1), minCost(i+2))
 * 
 */
var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    if (n === 0) return 0;
    if (n === 1) return cost[0]
    if (n === 2) return Math.min(cost[0], cost[1])

    const dp = new Array(n);
    dp[0] = cost[0]
    dp[1] = cost[1]

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[n - 1], dp[n - 2])

};

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost))