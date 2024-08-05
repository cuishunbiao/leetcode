/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let i = 0; j = n - 1;
    while (i < m && j >= 0) {
        let val = matrix[i][j];
        if (target === val) {
            return true
        } else if (val > target) {
            j--
        } else {
            i++
        }
    }
    return false;
};
const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 15
console.log(searchMatrix(matrix, target));