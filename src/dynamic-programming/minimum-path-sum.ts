var minPathSum = function (grid) {
    /**
     * 先获取 x 和 y 的长度，就是二维数组的 x, y
     * 创建一个相同的二维数组，DP，然后把计算的值都添加到数组中去。
     * 循环执行 x和y 轴来计算数据
     * 再通过 x,y 的数字和
     * */
    if (!grid.length || !grid[0].length) {
        return 0
    }
    const m = grid.length;
    const n = grid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    dp[0][0] = grid[0][0]
    //单边只能通过单边来「经过」, m 和 y 是相对应的
    // 计算 Y 轴
    for (let y = 1; y < m; y++) {
        dp[y][0] = grid[y][0] + dp[y - 1][0]
    }
    // 计算 X 轴
    for (let x = 1; x < n; x++) {
        dp[0][x] = grid[0][x] + dp[0][x - 1]
    }
    // 计算里面的数值
    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            //元素对应的最小路径和等于其上方相邻元素与其左方相邻元素两者对应的最小路径和中的最小值加上当前元素的值
            dp[x][y] = Math.min(dp[x - 1][y], dp[x][y - 1]) + grid[x][y]
        }
    }
    return dp[m - 1][n - 1]
}
console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))