var minPathSum = function (grid) {
    let sum = grid[0][0]
    // for (let i = 0; i <)
    /**
     * 先获取 x 和 y 的长度，就是二维数组的 x, y
     * 创建一个相同的二维数组，DP，然后把计算的值都添加到数组中去。
     * 循环执行 x和y 轴来计算数据
     * 再通过 x,y 的数字和
     * */
    const m = grid.length;
    const n = grid[0].length;
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    debugger
    for (let y = 0; y < m.length; y++) {
        // dp[y][0] = 
    }

}
console.log(minPathSum([[1, 2, 3], [4, 5, 6]]))