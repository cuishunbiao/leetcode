/**
 * @param {number[]} height
 * @return {number}
 * 容积计算：min(8,7) * (8-1)
 *
 */
var maxArea = function (height) {
    // i 的值要是前面最大的值；
    // let maxNumber = height[0]
    const result = []
    // const tally = (maxNumber, current, j, i) => {
    //     debugger
    //     console.log(maxNumber, current, j, i)
    //     return Math.min(maxNumber, current) * (j - i)
    // }
    const len = height.length - 1
    // const middle = Math.floor(len / 2)
    for (let i = 0, j = len; i < j; ) {
        const a = Math.min(height[i], height[j]) * (j - i)
        result.push(a)
        if (height[i] >= height[j]) {
            j--
        } else {
            i++
        }
    }
    return Math.max(...result)
}
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height))
