/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const m = matrix.length;

    for (let i = 0; i < m; i++) {
        for (let j = i; j < m; j++) {
            const cache = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = cache
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0, k = m - 1; j < k; j++, k--) {
            const cache = matrix[i][j]
            matrix[i][j] = matrix[i][k]
            matrix[i][k] = cache
        }
    }

    return matrix
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(matrix));