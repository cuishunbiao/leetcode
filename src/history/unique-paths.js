/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * 2, 2 = 2
 * 3, 2 = 3
 * 3, 3 = 6
 * 3, 7 = 28
 * 
 * 通过二维数据，存值
 * 
 */
var uniquePaths = function (m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(0))
    // 横向
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
const m = 3, n = 7
console.log(uniquePaths(m, n))