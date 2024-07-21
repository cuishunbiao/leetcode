/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length;
    const n = text2.length;

    // defined a two-dimensional array to save middle result
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    // dp[i][j] indicate text1 prev char and text2 prev char
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m][n]
};

const text1 = "bl", text2 = "yby"
console.log(longestCommonSubsequence(text1, text2));
