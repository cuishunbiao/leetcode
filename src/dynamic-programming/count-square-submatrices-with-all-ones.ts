/**
 * @param {number[][]} matrix
 * @return {number}
 */
// var countSquares = function (matrix) {
//     if (!matrix.length) return 0
//     let m = matrix.length, n = matrix[0].length
//     let result = 0
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (matrix[i][j] === 0) continue;
//             if (i > 0 && j > 0) {
//                 matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1
//             }
//             result += matrix[i][j]
//         }
//     }
//     return result
// };

var countSquares = function (matrix) {
    if (!matrix.length) return 0
    let m = matrix.length, n = matrix[0].length
    let result = 0
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // matrix 的值只判断是否进入当前循环
            if (matrix[i][j] === 0) continue;
            if (i === 0 || j === 0) {
                dp[i][j] = matrix[i][j]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
            }
            result += dp[i][j]
        }
    }
    return result
};
console.log(countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
]));
