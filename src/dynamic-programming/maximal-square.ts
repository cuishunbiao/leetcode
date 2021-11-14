/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix.length) return 0
    const m = matrix.length, n = matrix[0].length
    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '0') continue;
            if (i > 0 && j > 0) {
                //只有为1的方块才会执行到这里
                matrix[i][j] = Number(Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1])) + Number(matrix[i][j])
            }
            result = Math.max(matrix[i][j], result)
        }
    }
    return result * result
};
console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]))