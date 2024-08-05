function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // 创建并初始化 dp 数组
    const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // 初始化第一行和第一列
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    // 填充 dp 数组
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,  // 删除
                    dp[i][j - 1] + 1,  // 插入
                    dp[i - 1][j - 1] + 1  // 替换
                );
            }
        }
    }

    return dp[m][n];
}

// 测试代码
const word1 = "horse";
const word2 = "ros";
console.log(`word1 = "${word1}", word2 = "${word2}"`);
console.log(`编辑距离: ${minDistance(word1, word2)}`);