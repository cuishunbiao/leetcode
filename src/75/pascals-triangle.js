/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) return []
    if (numRows === 1) return [[1]]

    const result = [[1]]

    // if (numRows === 2) return [[1], [1, 1]]

    for (let i = 1; i < numRows; i++) {
        let rowArr = [[1]]
        for (let j = 1; j <= i; j++) {
            const iVal = result[i - 1]
            const jVal = result[j - 1]
            debugger
            console.log(iVal, jVal, Number(iVal) + Number(jVal));
            rowArr.push(Number(iVal) + Number(jVal))
        }
        result.push(rowArr);
    }


    // [0, 0]
    // [1, 0][1, 1]
    // [2, 0][2, 1][2, 2]
    // [3, 0][3, 1][3, 2][3, 3]


};

const numRows = 5
console.log(generate(numRows));