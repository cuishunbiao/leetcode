/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let maxIslandSize = 0;
    let rows = grid.length;
    let columns = grid[0].length;
    let counterStart: any;

    const calculateTheIslandSize = (i ,j) => {
        if (i>=0 && j>=0 && i< rows && j < columns && grid[i][j] > 0) {
            counterStart = counterStart + 1;
            grid[i][j] = -1;
            calculateTheIslandSize(i, j+1, counterStart);
            calculateTheIslandSize(i+1, j, counterStart);
            calculateTheIslandSize(i, j-1, counterStart);
            calculateTheIslandSize(i-1, j, counterStart);
        }
    }

    for (let g=0; g<rows; g++) {
        for (let k=0; k<columns; k++) {
            if (grid[g][k] > 0) {
                counterStart = 0;
                calculateTheIslandSize(g, k ,counterStart);
                maxIslandSize = Math.max(maxIslandSize, counterStart)
            }
        }
    }
    return maxIslandSize;
};