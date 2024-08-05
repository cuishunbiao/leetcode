/**
 * @param {number[]} height
 * @return {number}
 * 容积计算：min(8,7) * (8-1)
 *
 */
var maxArea = function (height) {
    let result = 0
    const len = height.length - 1
    for (let i = 0, j = len; i < j; ) {
        const resulti = height[i]
        const resultj = height[j]
        const tally = Math.min(resulti, resultj) * (j - i)
        result = Math.max(result, tally)
        if (resulti >= resultj) {
            j--
        } else {
            i++
        }
    }
    return result
}
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height))
