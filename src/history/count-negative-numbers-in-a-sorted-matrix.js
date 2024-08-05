/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    if (!grid.length) return 0
    let count = 0;
    const m = grid.length; // row
    const n = grid[0].length; // column
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] < 0) {
                count++
            }
        }
    }
    return count
};
const grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
console.log(countNegatives(grid));