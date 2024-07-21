/**
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function (mat) {
    const m = mat.length;
    if (m === 1) return mat[0][0]

    let result = 0
    for (let i = 0, j = m - 1; i < m; i++, j--) {
        result += mat[i][i] + mat[i][j]
    }
    // odd number
    if (m % 2) {
        const center = Math.floor(m / 2)
        result -= mat[center][center];
    }
    return result
};
const mat = [[5]]
console.log(diagonalSum(mat));