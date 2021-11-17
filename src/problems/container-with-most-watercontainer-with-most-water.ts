/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const n = height.length
    if (n === 1) return 0
    let rightPoint = n - 1, leftPoint = 0
    let result = 0, maxArea = 0
    while (leftPoint < rightPoint) {
        result = Math.min(height[leftPoint], height[rightPoint]) * (rightPoint - leftPoint)
        maxArea = Math.max(maxArea, result)
        if (height[leftPoint] < height[rightPoint]) {
            leftPoint++
        } else {
            rightPoint--
        }
    }
    return maxArea
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))