/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
// var matrixReshape = function (mat, r, c) {
//     //先判断行高是否能匹配上
//     let m = mat.length;
//     let n = mat[0].length;
//     if (m * n != r * c) return mat

//     const ans = new Array(r).fill(0).map(() => new Array(c).fill(0))
//     for (let i = 0; i < m * n; i++) {
//         console.log(`${ans}[Math.floor(${i} / ${c})][${i} % ${c}] = ${mat}[Math.floor(${i} / ${n})][${i} % ${n}]`)
//         console.log(`ans[${Math.floor(i / c)}][${i % c}] = mat[${Math.floor(i / n)}][${i % n}]`);
//         ans[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n]
//     }
//     return ans
// };
var matrixReshape = function (mat, r, c) {
    let sums = mat.flat()
    if (r * c != sums.length) return mat
    let res = []
    while (sums.length) {
        //sums.splice(0, c) 一行分几个数，从 res 数组里直接截取
        res.push(sums.splice(0, c))
    }
    return res
};
console.log(matrixReshape([[1, 2, 3], [3, 4, 5]], 2, 3));
