/**
 * @param {number} n
 * @return {number}
 * 1，1，2，3，5，8，13，21，34，55，89
 * 
 */
var fib = function (cost) {
    let dp = [0, 1]
    debugger
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n]
};

const n = 4;
console.log(fib(n));
