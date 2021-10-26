const uniquePaths = (m, n) => {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
    //填充 f[i][0] 和 f[0][j] 都为1
    for (let i = 0; i < m; i++) {
        f[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        f[0][j] = 1
    }
    //根据
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1]
        }
    }
    return f[m - 1][n - 1]
}
uniquePaths(3, 7)