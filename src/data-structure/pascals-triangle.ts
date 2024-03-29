/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const sums = []
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1)
        for (let j = 1; j < row.length - 1; j++) {
            row[j] = sums[i - 1][j - 1] + sums[i - 1][j]
        }
        sums.push(row)
    }
    return sums;
};