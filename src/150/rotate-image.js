/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 反转数组，反转两次，才可以达到效果。
 * 
 */
var rotate = function (matrix) {
    const len = matrix.length;
    let x = 0, y = len - 1;
    while (x < y) {
        [matrix[x], matrix[y]] = [matrix[y], matrix[x]]
        x++;
        y--;
    }
    for (let i = 0; i < len - 1; i++) {
        for (let j = i; j < len; j++) {
            if (i === j) {
                continue;
            }
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    return matrix
};
const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
console.log(rotate(matrix));