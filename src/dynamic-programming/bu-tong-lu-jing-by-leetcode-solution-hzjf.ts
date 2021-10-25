/**
 * f(i,j)
 * f(i,j) = f(i-1,j) + f(ii,j-1))
 * 如果 i或j 等于 0，那就是一个不满足要求的状态，需要忽略。
 * f(0,0) = 1，左上角到左上角的方式
 * 结果计算为：f(m-1,n-1)
 * 
 *  1 1 1 1
 *  1 2 3 4
 *  1 3 6 10
 *
 */

const uniquePaths = function (m, n) {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        f[i][0] = 1
    }
    for (let j = 0; j < n; j++) {
        f[0][j] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            f[i][j] = f[i - 1][j] + f[i][j - 1]
            console.log(f)
        }
    }
    return f[m - 1][n - 1]
}
console.log(uniquePaths(3, 3))

