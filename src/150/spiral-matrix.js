/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 
 * 需要设计边界，到了边界减少或者增加数量
 * 
 * 定义两个变量，一个横向数量，一个纵向数量；
 * 循环（循环多少次？）
 * 当 row 等于
 * 
 * column
 * 
 * 四个方法：判断当前 row 和 column 的长度，进入不同方法；
 * row++ 和 row--
 * column++ 和 column--
 * 
 * 
 */
var spiralOrder = function (matrix) {
    const result = []
    if (matrix.length === 0) return result;
    let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right across the top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }
        top++; // move top boundary down
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }
        right--; // move right boundary left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
            bottom--; // move bottom boundary up
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
            left++; // move left boundary right
        }
    }
    return result
};
const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
console.log(spiralOrder(matrix));