/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount = 5, coins = [1, 2, 5]) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]
        }
    }
    return dp[amount]
};
console.log(change())