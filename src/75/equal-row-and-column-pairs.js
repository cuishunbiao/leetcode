/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    let count = 0
    const rows = []
    const columns = []
    for (let item of grid) {
        const key = item.join(',');
        rows.push(key)
    }
    for (let i = 0; i < grid[0].length; i++) {
        const gridCacheItem = []
        for (let j = 0; j < grid[0].length; j++) {
            gridCacheItem.push(grid[j][i])
        }
        const key = gridCacheItem.join(',');
        columns.push(key)
    }
    for (let row of rows) {
        for (let column of columns) {
            if (row === column) count++
        }
    }
    return count
};
const grid = [[3, 3], [3, 3]]
console.log(equalPairs(grid));