/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) return []

    const result = [];
    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;

    while (true) {
        // 向右遍历
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }
        top++;
        if (top > bottom) break;

        // 向下遍历
        for (let j = top; j <= bottom; j++) {
            result.push(matrix[j][right])
        }
        right--;
        if (left > right) break;

        // 向左遍历
        for (let k = right; k >= left; k--) {
            result.push(matrix[bottom][k])
        }
        bottom--;
        if (top > bottom) break;

        // 向上遍历
        for (let l = bottom; l >= top; l--) {
            result.push(matrix[l][left])
        }
        left++;
        if (left > right) break;
    }
    return result
};

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(spiralOrder(matrix));